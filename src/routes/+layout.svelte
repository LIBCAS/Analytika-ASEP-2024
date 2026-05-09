<script>
	// Sveltekit
	import { onMount } from 'svelte';
	// import { browser } from '$app/environment';
	// stores
	import { getStores } from '$app/stores';
	const { page } = getStores();

	export let data;

	// default json web source
	const defaultJson = data.out;

	// settings
	import settings from '$lib/settings.js';

	// default connector Arl
	import { Connector } from '$lib/utils/jsloader/Connector/Connector.js';

	// stores
	import { devel } from '$lib/stores/devel';
	import { loadedMenu } from '$lib/stores/loadedMenu';
	import { loadLevel } from '$lib/stores/loadLevel';
	import { urlChanged } from '$lib/stores/urlChanged';
	import { section } from '$lib/stores/section';
	import { shortcuts } from '$lib/stores/shortcuts';
	import { language } from '$lib/stores/language';
	import { year } from '$lib/stores/year';
	import { urlWeb } from '$lib/stores/urlWeb';
	import { institutes } from '$lib/stores/institutes.js';
	import { instituteAreas } from '$lib/stores/instituteAreas.js';
	import { ustavyOddeleni } from '$lib/stores/ustavyOddeleni';
	import { voLeveMenu } from '$lib/stores/voLeveMenu';
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';
	import { departmentLeftMenu } from '$lib/stores/departmentLeftMenu.js';
	import { teamLeftMenu } from '$lib/stores/teamLeftMenu.js';
	import { authorLeftMenu } from '$lib/stores/authorLeftMenu.js';
	import { exData } from '$lib/stores/exData';

	// utilitis
	import { s } from '$lib/utils/serverUrl';
	import { setLanguage } from '$lib/utils/setLanguage';
	import { setUrlWeb } from '$lib/utils/setUrlWeb';
	import { setSection } from '$lib/utils/setSection';
	import { setShortcuts } from '$lib/utils/setShortcuts';
	import { instituteMenu } from '$lib/utils/jsloader/instituteMenu.js';
	import { departmentMenu } from '$lib/utils/jsloader/departmentMenu.js';
	import { researchAreasMenu } from '$lib/utils/jsloader/researchAreasMenu.js';
	import { authorMenu } from '$utils/jsloader/authorMenu.js';
	import { getCurrentYear } from '$lib/utils/getCurrentYear.js';

	// components
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	// Is the system being used in export mode
	$exData = false;

	// set language
	$: if ($page) $language = setLanguage($page.url.pathname);

	// get actual url
	$: if ($page) $urlWeb = setUrlWeb($page.url.pathname);

	// URL change detection
	let currentPath = '-';
	$urlChanged = false;
	$: if ($page.url.pathname !== currentPath) {
		if ($urlChanged) {
			$urlChanged = false;
		}
		$urlChanged = true;
		currentPath = $page.url.pathname;
	}

	// development mode for Svelte components?
	if (typeof settings.devel !== 'undefined' && settings.devel) {
		$devel = true;
	} else {
		$devel = false;
	}

	let ustavyCs = null;
	let ustavyEn = null;
	let ustavyOblastniEn = null;
	let ustavyOblastniCs = null;

	$: if ($language && defaultJson) {
		/** @type {Object} */
		ustavyCs = defaultJson.ustavy_cs;
		/** @type {Object} */
		ustavyEn = defaultJson.ustavy_en;
		/** @type {Object} */
		ustavyOblastniEn = defaultJson.ustavy_oblasti_en;
		/** @type {Object} */
		ustavyOblastniCs = defaultJson.ustavy_oblasti_cs;

		if ($language == 'en') {
			$instituteAreas = ustavyOblastniEn;
			$institutes = defaultJson.ustavy_en;
			// $autori = defaultJson.autori_en;
		} else {
			$instituteAreas = ustavyOblastniCs;
			$institutes = defaultJson.ustavy_cs;
			// $autori = defaultJson.autori_cs;
		}
	}

	/**
	 * @typedef {object} ajaxDataPromise
	 * @property {object} [ustav_leftmenu] - Volitelné údaje o ústavu
	 * @property {object} [oddeleni_leftmenu] - Volitelné údaje o oddělení
	 * @property {object} [vo_leftmenu] - Volitelné údaje o VO
	 * @property {object} [tym_leftmenu] - Volitelné údaje o týmu
	 * @property {object} [autor_leftmenu] - Volitelné údaje o autorovi
	 * @property {object} [oddeleni] - Volitelné údaje o oddělení
	 */
	/**
	 * @param {ajaxDataPromise} data
	 */
	function setData(data) {
		// left menu - institute
		if (typeof data.ustav_leftmenu !== 'undefined') {
			if (Object.keys(data.ustav_leftmenu).length !== 0) {
				$instituteLeftMenu = data.ustav_leftmenu;
				$loadedMenu.ustavy = true;
			}
		}

		// left menu - department
		if (typeof data.oddeleni_leftmenu !== 'undefined') {
			if (Object.keys(data.oddeleni_leftmenu).length !== 0) {
				$departmentLeftMenu = data.oddeleni_leftmenu;
				$loadedMenu.oddeleni = true;
			}
		}

		// left menu -scientific fields
		if (typeof data.vo_leftmenu !== 'undefined') {
			if (Object.keys(data.vo_leftmenu).length !== 0) {
				$voLeveMenu = data.vo_leftmenu;
				$loadedMenu.vo = true;
			}
		}

		// left menu - teams
		if (typeof data.tym_leftmenu !== 'undefined') {
			if (Object.keys(data.tym_leftmenu).length !== 0) {
				$teamLeftMenu = data.tym_leftmenu;
				$loadedMenu.tymy = true;
			}
		}

		// left menu - authors
		if (typeof data.autor_leftmenu !== 'undefined') {
			$authorLeftMenu = data.autor_leftmenu;
			if (Object.keys(data.autor_leftmenu).length !== 0) {
				$authorLeftMenu = data.autor_leftmenu;
				$loadedMenu.autor = true;
			}
		}

		// department - list
		if (typeof data.oddeleni !== 'undefined') {
			if (Object.keys(data.oddeleni).length !== 0) {
				$ustavyOddeleni = data.oddeleni;
				$loadedMenu.oddeleni = true;
			}
		}
		$urlChanged = false;
	}

	// ZAKLADNI DATA WEBU - nacteni externich dat - zakladni data k zobrazeni webu
	// BASIC DATA LOADER - load extenal data
	const connector = new Connector();
	async function refreshToken() {
		startSystem = await connector.refreshTokenServer();
	}
	let startSystem = false;
	onMount(async () => {
		if (typeof $page.url.searchParams !== 'undefined' && $page.url.searchParams !== null) {
			if ($page.url.searchParams.get('ex')) {
				$exData = true;
			}
		}
		$loadLevel = 1;
		$year = getCurrentYear();
		// valid arl token
		let token = connector.getToken();
		if (token) {
			startSystem = true;
		} else {
			refreshToken();
			sessionStorage.removeItem('arl_token_js__locker');
		}
	});

	// BASIC WEBSITE LOADER - sections, shortcuts, etc.
	function setSectionRoute() {
		if (typeof $page.url.pathname !== 'undefined') {
			$section = setSection($page.url.pathname);
			$shortcuts = setShortcuts($page.url.pathname);
			$loadLevel = 2;
		}
	}
	$: if ($page && $loadLevel > 0) {
		setSectionRoute();
	}

	// Basic menu options
	/** @type {?string} */
	let lastSection = null;
	/** @type {?string} */
	let lastUstav = null;
	/** @type {?string} */
	let lastOddeleni = null;
	/** @type {?string} */
	let lastVo = null;
	/** @type {?string} */
	let lastAutor = null;

	// load menu, start system
	$: if ($page && $loadLevel > 1 && $section && startSystem) {
		// section - homepage
		if ($section === 'home' && lastSection !== $section) {
			lastSection = $section;
		}
		// section - institute
		else if (
			$section === 'ustav' &&
			(lastSection !== $section || (lastUstav !== $shortcuts.ustav && $shortcuts.ustav))
		) {
			$loadedMenu.ustavy = false;
			$instituteLeftMenu = {};
			lastSection = $section;
			lastUstav = $shortcuts.ustav;
			ustavMenuJS();
		}
		// section - department
		else if (
			$section === 'oddeleni' &&
			(lastSection !== $section || (lastOddeleni !== $shortcuts.oddeleni && $shortcuts.oddeleni))
		) {
			$loadedMenu.oddeleni = false;
			$departmentLeftMenu = [];
			lastSection = $section;
			lastOddeleni = $shortcuts.oddeleni;
			oddeleniMenuJS();
			$instituteLeftMenu = {};
			ustavMenuJS();
		}
		// section - scientific fields
		else if (
			$section === 'vo' &&
			(lastSection !== $section || (lastVo !== $shortcuts.vo && $shortcuts.vo))
		) {
			$loadedMenu.vo = false;
			$voLeveMenu = [];
			lastSection = $section;
			lastVo = $shortcuts.vo;
			voMenuJS();
		}
		// section - authors
		else if (
			$section === 'autor' &&
			(lastSection !== $section || (lastAutor !== $shortcuts.autor && $shortcuts.autor))
		) {
			$loadedMenu.autor = false;
			$authorLeftMenu = [];
			lastSection = $section;
			lastAutor = $shortcuts.vo;
			authorMenuJS();
			$instituteLeftMenu = {};
			ustavMenuJS();
		} else {
			lastSection = $section;
		}
	}

	// Menu Functions
	async function authorMenuJS() {
		$authorLeftMenu = [];
		if ($section === 'autor') {
			const objDataAuthorMenu = authorMenu(settings.menu_autor, $language, $devel);
			if (objDataAuthorMenu) {
				objDataAuthorMenu.then(setData.bind(null));
			}
		}
		return true;
	}

	async function voMenuJS() {
		$voLeveMenu = [];
		if ($section === 'vo') {
			const objDataMenu = researchAreasMenu(settings.menu_vo, $language, $devel);
			if (objDataMenu) {
				objDataMenu.then(setData.bind(null));
			}
		}
		return true;
	}

	async function ustavMenuJS() {
		$instituteLeftMenu = {};
		if ($section === 'ustav' || $section === 'oddeleni' || $section === 'autor') {
			const objDataInstuteMenu = instituteMenu(
				'',
				s('server.forms_arl') || '',
				settings.menu_ustav,
				$language
			);
			if (objDataInstuteMenu) {
				objDataInstuteMenu.then(setData.bind(null));
			}
		}
		return true;
	}

	async function oddeleniMenuJS() {
		$departmentLeftMenu = [];
		if ($section === 'oddeleni') {
			const objDataDepartmentMenu = departmentMenu(settings.menu_oddeleni, $language);
			if (objDataDepartmentMenu) {
				objDataDepartmentMenu.then(setData.bind(null));
			}
		}
		return true;
	}
</script>

{#if startSystem}
	<!-- header -->
	{#if !$exData}
		<Header />
	{/if}
	<!-- slot -->
	<div id="content">
	<slot />
	</div>
	{#if !$exData}
		<Footer />
	{/if}
{/if}

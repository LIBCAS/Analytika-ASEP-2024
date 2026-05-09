<script>
	/** @type {?String} */
	export let idUstav;

	/** @type {?String} */
	let idUstavDetail = idUstav;

	/** @type {?String} */
	export let idOddeleni;

	/** @type {?String} */
	export let nazevOddeleni;

	/** @type {?Array<Object<string, string>>} */
	export let seznamOddeleni = null;

	// storage
	import { loadLevel } from '$lib/stores/loadLevel';
	import { loadedMenu } from '$lib/stores/loadedMenu';
	import { institutes } from '$lib/stores/institutes.js';
	import { urlWeb } from '$lib/stores/urlWeb';
	import { departmentLeftMenu } from '$lib/stores/departmentLeftMenu.js';
	import { shortcuts } from '$lib/stores/shortcuts';
	import { leftMenuSelected } from '$lib/stores/leftMenuSelected.js';
	import { devel } from '$lib/stores/devel';
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';

	// components
	import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';
	import Leftmenu from '$lib/components/sites/department/Leftmenu.svelte';
	import FormDepartment from '$lib/components/sites/forms/FormDepartment.svelte';
	import FormBase from '$lib/components/sites/forms/FormBase.svelte';

	// utils
	import { language } from '$lib/stores/language';
	import { getInformationInstitute } from '$utils/institute/getInformationInstitute.js';
	import { getActiveDepartment } from '$lib/utils/jsloader/getActiveDepartment.js';
	import { s } from '$lib/utils/serverUrl';

	// Breadcrumb
	import Breadcrumb from '$lib/components/sites/lib/Breadcrumb.svelte';
	let endtext = '';
	let level2 = 'us-oddeleni';

	import settings from '$lib/settings';
	let base = settings.domena;

	/** @type  {string} */
	let nadpisStranky = '';

	/** @type  {string} */
	let nadpisStrankyText = '';

	/** @type  {boolean} */
	let innerHeading = true;

	/** @type  {string} */
	let leftMenuBaseUrl = '';

	/** @type  {string} */
	let ustavText = '';

	$: if ($loadedMenu.oddeleni && $loadLevel > 1) {
		nadpisStranky = endtext = nazevOddeleni || '';
		const infoUstav = getInformationInstitute($shortcuts.ustav, $institutes);
		ustavText = infoUstav.zkratka;
		nadpisStrankyText = '';
		leftMenuBaseUrl = base + $urlWeb;
		$loadedMenu.oddeleni = false;
	}

	let viewFormBase = false;
	let nadpisForm = '';
	let napovedaMenu = '';
	/** @type  {?Object.<string,string>} */
	let dataFormBase = null;

	/**
	 * Easy route for department
	 * @param {?CustomEvent} event - Change menu item
	 * @param {?String} headingFormHashtag
	 */
	function easyRouteOddeleni(event, headingFormHashtag = null) {
		viewFormBase = false;
		headingFormHashtag || '';

		// left menu - "dispatch"
		if (event && event.detail.idmenu) {
			const reg = RegExp('(.*)#(.*)', 'g');
			headingFormHashtag = '#' + event.detail.idmenu.replace(reg, '$2');
		}

		if (typeof $departmentLeftMenu === 'undefined') {
			return false;
		}
		if (typeof typeof $departmentLeftMenu.valMenu === 'undefined') {
			return false;
		}
		if (headingFormHashtag === null) {
			if (typeof window !== 'undefined') {
				headingFormHashtag = window.location.hash || '';
			}
		} else {
			window.location.hash = headingFormHashtag;
		}

		if (headingFormHashtag == '') {
			if (
				typeof $departmentLeftMenu.valMenu[0][0] !== 'undefined' &&
				typeof $departmentLeftMenu.valMenu[0][0][2] !== 'undefined'
			) {
				headingFormHashtag = $departmentLeftMenu.valMenu[0][0][2];
				$leftMenuSelected = headingFormHashtag;
				nadpisForm = $departmentLeftMenu.valMenu[0][0][2];
				napovedaMenu = $departmentLeftMenu.valMenu[0][0][3];
			}
		}

		const outDepartmentMenu = getActiveDepartment(
			headingFormHashtag,
			s('server.forms_arl') || '',
			settings.menu_oddeleni,
			$language
		);
		outDepartmentMenu.then((dataValLs) => {
			dataFormBase = dataValLs;
			viewFormBase = true;
		});

		if ($departmentLeftMenu && Object.keys($departmentLeftMenu.valMenu).length > 0) {
			for (let keyMain in $departmentLeftMenu.valMenu) {
				for (let key in $departmentLeftMenu.valMenu[keyMain]) {
					let arrVal = $departmentLeftMenu.valMenu[keyMain][key];
					if (
						'#' + arrVal[2] === headingFormHashtag ||
						arrVal[2] === headingFormHashtag
					) {
						nadpisForm = arrVal[1];
						$leftMenuSelected = arrVal[2];
						napovedaMenu = arrVal[3];
					}
				}
			}
		}
	}
	$: if ($departmentLeftMenu && typeof $departmentLeftMenu.valMenu !== 'undefined') {
		easyRouteOddeleni(null, null);
	}
</script>

{#if $loadLevel > 1}
	<main id="site">
		<section class="l-head-container-2 l-head-container-2--site"></section>
		<div class="l-main">
			<div class="l-site-dva-bloky">
				<Leftmenu {leftMenuBaseUrl} on:startroute={easyRouteOddeleni} />
				<div class="l-site-dva-bloky__item">
					<Breadcrumb {endtext} {level2} {ustavText} />
					<MainHeading
						{nadpisStranky}
						{nadpisStrankyText}
						{innerHeading}
						{napovedaMenu}
						{nadpisForm}
					/>
					<div id="l-site-grid" class="l-site-grid">
						{#if nadpisForm}
							<div class="c-form-nadpis">
								<h3>{nadpisForm}</h3>
							</div>
						{/if}
						{#if viewFormBase}
							<FormDepartment {seznamOddeleni} {idUstavDetail} {idOddeleni} />
							<FormBase {nadpisForm} {idUstavDetail} {idOddeleni} {dataFormBase} />
						{/if}
					</div>
				</div>
			</div>
		</div>
		{#if $devel}
			<div class="coder-out">
				<h3>Vývoj - konfigurace</h3>
				<pre>
				{JSON.stringify($searchStatisticGen, null, 2)}
			</pre>
			</div>
		{/if}
	</main>
{/if}
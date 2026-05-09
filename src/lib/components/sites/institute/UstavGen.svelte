<script>
	// components
	import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';
	import LinkCep from '$lib/components/sites/lib/LinkCep.svelte';
	import Breadcrumb from '$lib/components/sites/lib/Breadcrumb.svelte';
	import FormBase from '$lib/components/sites/forms/FormBase.svelte';
	import Leftmenu from '$lib/components/sites/institute/Leftmenu.svelte';
	import { loadedMenu } from '$lib/stores/loadedMenu';

	// stores
	import { leftMenuSelected } from '$lib/stores/leftMenuSelected.js';
	import { language } from '$lib/stores/language';
	import { institutes } from '$lib/stores/institutes.js';
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';
	import { urlWeb } from '$lib/stores/urlWeb';

	// utils
	import { nameOfIntitute } from '$utils/institute/nameOfIntitute.js';
	import { getActiveInstitute } from '$lib/utils/jsloader/getActiveInstitute.js';
	import { getIcoInstitute } from '$utils/institute/getIcoInstitute';
	import { s } from '$lib/utils/serverUrl';

	import settings from '$lib/settings';
	let base = settings.domena;

	/** @type  {string} */
	export let idUstavDetail;
	/** @type  {string} */
	export let akceUstav;

	/** @type  {string} */
	let endtext = '';

	/** @type  {string} */
	let	nadpisStranky = '',
		icoInstitution = '';

	/** @type  {string} */
	const nadpisStrankyText = '';

	/** @type  {boolean} */
	let innerHeading = true;

	/** @type  {string} */
	let leftMenuBaseUrl = '';
	$: if ($loadedMenu.ustavy === true) {
		nadpisStranky = endtext = nameOfIntitute(idUstavDetail, $institutes);
		leftMenuBaseUrl = base + $urlWeb;
		$loadedMenu.ustavy = false;
	}

	/** @type {string} */
	let nadpisForm = '',
		nadpisFormSub = '',
		napovedaMenu = '';

	/** @type {boolean} */
	let viewFormBase = false;

	/** @type {?Object} */
	let dataFormBase = null;

	/** @type {?String} */
	let sysno = null;

	/**
	 * Selector parts of institution site
	 * @param {?CustomEvent} event - Change menu item
	 * @param {?string} headingHashtag
	 * @returns {void}
	 */
	const easyRoute = (event, headingHashtag = null) => {
		viewFormBase = false;
		sysno = '';
		nadpisFormSub = '';
		if (event && event.detail.idmenu) {
			const reg = RegExp('(.*)#(.*)', 'g');
			headingHashtag = '#' + event.detail.idmenu.replace(reg, '$2');
		}
		if (typeof $instituteLeftMenu === 'undefined') {
			return;
		}
		if (typeof typeof $instituteLeftMenu.valMenu === 'undefined') {
			return;
		}

		if (headingHashtag === null) {
			if (typeof window !== 'undefined') {
				headingHashtag = window.location.hash;
			}
		} else {
			window.location.hash = headingHashtag;
		}

		if (headingHashtag) {
			const regexSysno = /(.*)\/sysno\/(.*)/;
			const matchSysno = headingHashtag.match(regexSysno);
			if (matchSysno) {
				if (matchSysno[1] && matchSysno[2]) {
					sysno = matchSysno[2];
					nadpisFormSub = ' "' + sysno + '"';
					headingHashtag = matchSysno[1];
				}
			}
		}

		if (headingHashtag == '') {
			if (
				typeof $instituteLeftMenu.valMenu[0][0] !== 'undefined' &&
				typeof $instituteLeftMenu.valMenu[0][0][2] !== 'undefined'
			) {
				headingHashtag = $instituteLeftMenu.valMenu[0][0][2];
				$leftMenuSelected = headingHashtag;
				nadpisForm = $instituteLeftMenu.valMenu[0][0][2];
				napovedaMenu = $instituteLeftMenu.valMenu[0][0][3];
				nadpisStranky = endtext = nameOfIntitute(idUstavDetail, $institutes);
			}
		}

		const outDataUstavMenu = getActiveInstitute(
			headingHashtag,
			s('server.forms_arl'),
			settings.menu_ustav,
			$language
		);
		outDataUstavMenu.then((dataValLs) => {
			dataFormBase = dataValLs;
			viewFormBase = true;
			const arrinstituteCepHeader = settings.institute_cep_header || [];
			icoInstitution = '';
			if (arrinstituteCepHeader.find((item) => item === dataValLs.conf)) {
				icoInstitution = getIcoInstitute(idUstavDetail, $institutes);
			}
		});

		if ($instituteLeftMenu && Object.keys($instituteLeftMenu.valMenu).length > 0) {
			for (let keyMain in $instituteLeftMenu.valMenu) {
				for (let key in $instituteLeftMenu.valMenu[keyMain]) {
					let arrVal = $instituteLeftMenu.valMenu[keyMain][key];
					if (
						'#' + arrVal[2] === headingHashtag ||
						arrVal[2] === headingHashtag ||
						arrVal[2] == akceUstav
					) {
						nadpisForm = arrVal[1];
						$leftMenuSelected = arrVal[2];
						napovedaMenu = arrVal[3];
					}
				}
			}
		}
	};

	$: if ($instituteLeftMenu && typeof $instituteLeftMenu.valMenu !== 'undefined') {
		easyRoute(null, null);
	}
</script>
<main id="site">
	<section class="l-head-container-2 l-head-container-2--site"></section>
	<div class="l-main">
		<div class="l-site-dva-bloky">
			<Leftmenu {leftMenuBaseUrl} {akceUstav} on:startroute={easyRoute} />
			<div class="l-site-dva-bloky__item">
				<Breadcrumb {endtext} />
				<MainHeading
					{nadpisStranky}
					{nadpisStrankyText}
					{innerHeading}
					{napovedaMenu}
					{nadpisForm}
				/>
				<div id="l-site-form" class="l-site-form">
					{#if nadpisForm}
						{#if icoInstitution}
							<p><LinkCep {icoInstitution} /></p>
						{/if}
						<div class="c-form-nadpis">
							<h3>{nadpisForm}{nadpisFormSub}</h3>
						</div>
					{/if}
					{#if viewFormBase}
						<FormBase {nadpisForm} {idUstavDetail} {dataFormBase} {sysno} />
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div>&nbsp;</div>
</main>
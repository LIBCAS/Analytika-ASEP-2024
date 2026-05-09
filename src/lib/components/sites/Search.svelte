<script>
	// base svelte
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';
	const { page } = getStores();

	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataSearchAuthor.js').ArlDataSearchAuthor} ArlDataSearchAuthor */
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataSearchSysno.js').ArlDataSearchSysno} ArlDataSearchSysno */

	// stores
	import { language } from '$lib/stores/language';
	import { s } from '$lib/utils/serverUrl';
	import { t } from '$lib/utils/translate';
	import { formSites } from '$lib/utils/jssender/formSites.js';

	// components
	import ViewAutorFull from '$lib/components/sites/forms/formbase/ViewAutorFull.svelte';
	import ViewSysnoFull from '$lib/components/sites/forms/formbase/ViewSysnoFull.svelte';
	import Loader from '$lib/components/sites/lib/Loader.svelte';

	/** @type {Object<string,string>} */
	let texts = {};
	texts['razeni'] = t('site.vedni_oblast.form_razeni', $language);
	texts['format'] = t('site.vedni_oblast.form_format', $language);
	texts['error_druh'] = t('site.form.error_druh', $language);
	texts['error_rok'] = t('site.form.error_rok', $language);
	texts['zacatek'] = t('site.form.zacatek', $language, 'u');
	texts['konec'] = t('site.form.konec', $language, 'u');
	texts['predchozi'] = t('site.form.predchozi', $language, 'u');
	texts['dalsi'] = t('site.form.dalsi', $language, 'u');
	texts['strana'] = t('site.form.strana', $language, 'l');
	texts['z'] = t('site.form.z', $language, 'l');
	texts['nalezeno_zaznamu'] = t('site.form.nalezeno_zaznamu', $language, 'u');
	texts['neodpovida_zaznam'] = t('site.form.neodpovida_zaznam', $language, 'u');
	texts['graf_dole'] = t('chart.footer1', $language, 'u');
	texts['zvolit'] = t('site.form.zvolit', $language, 'u');
	texts['zrusit_vyber'] = t('site.form.zrusit_vyber', $language, 'l');
	texts['vyhledat'] = t('site.form.vyhledet', $language, 'u');
	texts['knihovna_nazev'] = t('obecne.knihovna_av_nazev', $language, 'u');
	texts['hledany_vyraz'] = t('obecne.hledany_vyraz', $language, 'u');
	texts['vse'] = t('obecne.vse', $language, 'u');
	texts['ipac'] = t('repozitory.ipac.abbr', $language, 'u');
	texts['handlenet'] = t('repozitory.handlenet.abbr', $language, 'u');
	texts['scopus'] = t('repozitory.scopus.abbr', $language, 'u');
	texts['wos'] = t('repozitory.wos.abbr', $language, 'u');
	texts['pubmed'] = t('repozitory.pubmed.abbr', $language, 'u');
	texts['doi'] = t('repozitory.doi.abbr', $language, 'u');
	texts['riv'] = t('repozitory.riv.abbr', $language, 'u');
	texts['orcid'] = t('repozitory.orcid.abbr', $language, 'u');
	texts['repozitory_list'] = t('repozitory.list.abbr', $language, 'u');
	texts['cep'] = t('repozitory.cep.abbr', $language, 'u');
	texts['cep_text'] = t('repozitory.cep.text', $language, 'u');
	texts['pocet_zaznamu'] = t('obecne.pocet_zaznamu', $language, 'u');
	texts['vysledek_v_riv'] = t('repozitory.riv.vysledek_v_riv', $language, 'u');
	texts['ip_adresy'] = t('obecne.pouze_ip_adresy', $language, 'u');

	// Main heading
	import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';

	/** @type  {string} */
	let level2 = 'hledej';

	/** @type  {string} */
	$: nadpisStranky = t('menu.vyhledavac.search', $language, 'u'); //t('obecne.o_databazi', $language, 'u');

	/** @type  {string} */
	let nadpisStrankyText = '';

	/** @type  {boolean} */
	let innerHeading = false;

	/** @type {?ArlDataSearchAuthor} */
	let dataArl = null;

	/** @type {?ArlDataSearchSysno} */
	let dataArlSysno = null;

	/** @type {String} */
	let queryFulltext = '',
	sortFulltext = 'TF_SF_ANAL_SHORT';

	/** @type {Object<string,string>}*/
	const dataSend = {};

	// Breadcrumb
	import Breadcrumb from '$lib/components/sites/lib/Breadcrumb.svelte';
	$: endtext = t('menu.vyhledavac.search', $language, 'l');

	/**
	 * Get Arl data - search authors name
	 * @param site
	 * return {ArlDataSearchAuthor}
	 */
	const getAuthors = async (site = 1) => {
		const urlBase = s('server.formsSendAuthor');
		const conf = 'authorFull';
		dataSend.ustav = 'all';
		const outDataArl = formSites(site, urlBase, dataSend, $language, conf);
		return outDataArl;
	};

	/**
	 * Get Arl data - search SYSNO
	 * return {ArlDataSearchSysno}
	 */
	const getSysno = async () => {
		const urlBase = s('server.formsSendStranka');
		const conf = 'sysnoFull';
		const site = 1
		dataSend.ustav = 'all'
		dataSend.zf = sortFulltext
		const outDataArl = formSites(site, urlBase, dataSend, $language, conf);
		return outDataArl;
	};

	const setFormData = (actSite = null) => {
		let site = actSite;
	};

	let active = false
	let mode = 'author'

	/** @type{String[]}*/
	let outRecords = [];

	onMount(() => {
		queryFulltext = $page.url.searchParams.get('q') || queryFulltext;
		if ($page.url.searchParams.get('sort') && $page.url.searchParams.get('sort')!==null) {
			sortFulltext = $page.url.searchParams.get('sort') || sortFulltext;
		}
		if (queryFulltext) {
			mode = 'author'
			if (queryFulltext !== null) {
				const regexSysna = RegExp('^[0-9]{1,9}$', 'i');
				if (regexSysna.test(queryFulltext) == true) {
					mode = 'sysno'
				}
				if ((mode === 'sysno')) {
					dataSend.sysno = queryFulltext;
					const outDataArl = getSysno();
					if (outDataArl) {
						outDataArl.then((dataVal) => {
							dataArlSysno = dataVal;
							active = true;
							if (dataArlSysno && typeof dataArlSysno !== 'undefined' && typeof dataArlSysno.records !== 'undefined') {
								outRecords = dataArlSysno.records;
							}
						});
					}
				} else {
					dataSend.autor = queryFulltext;
					const outDataArl = getAuthors(1);
					if (outDataArl) {
						outDataArl.then((dataVal) => {
							dataArl = dataVal;
							active = true;
						});
					}
				}
			}
		}
	});
</script>
<section class="l-head-container-2 l-head-container-2--site"></section>
<main id="site">
	<div class="l-main">
		<div class="l-site-subpage11">
			<div class="l-site-normal">
				<Breadcrumb {endtext} {level2} />
				<MainHeading {nadpisStranky} {nadpisStrankyText} {innerHeading} />
				{#if queryFulltext && !dataArl && !dataArlSysno}
					<div id="vysledek-vyhledavani-c" class="c-loader">
						<Loader />
					</div>
				{:else if active}
					{#if queryFulltext && dataArl && (mode === 'author')}
						<ViewAutorFull {dataArl} {texts} {setFormData} />
					{:else if queryFulltext && dataArlSysno && (mode ==='sysno')}
						<ViewSysnoFull {outRecords} dataArl={dataArlSysno} {texts} {setFormData} queryFulltext={queryFulltext} sortFulltext={sortFulltext}/>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</main>


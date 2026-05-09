<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @type {?String} */
	export let idUstavDetail = null;

	/** @type {?String} */
	export let idOddeleni = null;

	/** @type {?String} */
	export let idAutor = null;

	/** @type {String} */
	export let nadpisForm = '';

	/** @type {?String} */
	export let sysno = null;

	/** @type {?Object<string, any>} */
	export let dataFormBase = null;
	if (!dataFormBase) {
		dataFormBase = {};
		dataFormBase.conf = '';
		dataFormBase.menu = '';
		dataFormBase.url = '';
	}

	// components
	import MultiSelect from '$lib/components/sites/forms/formbase/MultiSelect.svelte';
	import Select from '$lib/components/sites/forms/formbase/Select.svelte';
	import SelectMaster from '$lib/components/sites/forms/formbase/SelectMaster.svelte';
	import SelectSlave from '$lib/components/sites/forms/formbase/SelectSlave.svelte';
	import SelectSearch from '$lib/components/sites/forms/formbase/SelectSearch.svelte';
	import Text from '$lib/components/sites/forms/formbase/Text.svelte';
	import Hidden from '$lib/components/sites/forms/formbase/Hidden.svelte';
	import RadioSelect from '$lib/components/sites/forms/formbase/RadioSelect.svelte';
	import Checkbox from '$lib/components/sites/forms/formbase/Checkbox.svelte';
	import Loader from '$lib/components/sites/lib/Loader.svelte';
	import ViewChart from '$lib/components/sites/forms/formbase/ViewChart.svelte';
	import ViewSiteResult from '$lib/components/sites/forms/formbase/ViewSiteResult.svelte';
	import ViewSiteAuthor from '$lib/components/sites/forms/formbase/ViewSiteAuthor.svelte';
	import ViewDepartment from '$lib/components/sites/forms/formbase/ViewDepartment.svelte';

	// stores
	import { language } from '$lib/stores/language';
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';
	import { leftMenuSelected } from '$lib/stores/leftMenuSelected.js';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utils
	import { t } from '$lib/utils/translate';
	import { s } from '$lib/utils/serverUrl';
	import { forms } from '$lib/utils/jsloader/forms.js';
	import { FormUtils } from '$lib/utils/jsloader/Forms/FormUtils.js';
	import { setIdAuthorLname } from '$lib/utils/author/setIdAuthorLname.js';
	import { formsTransSend } from '$lib/utils/jstranform/formsTransSend.js';
	import { formFacets } from '$lib/utils/jssender/formFacets.js';
	import { urlSorter } from '$lib/utils/arl/urlSorter.js';

	// services
	import { Views } from '$lib/services/Views.js';

	// settings
	import settings from '$lib/settings';

	/** @type {HTMLFormElement|null} */
	let formStart = null;

	/** @type {?String} */
	let leftMenu = $leftMenuSelected;

	/** @type {Boolean} */
	let validFormErrorsView = false;

	/** @type {FormUtils} */
	const formUtils = new FormUtils();

	/** @type {?String} */
	let chartType = null;

	/** @type {Boolean} */
	let loading1 = false,
		loadingTextData = false;
	let loadingChart = false;

	/** @type {Number} */
	let viewTemplateUS07 = 0,
		viewTemplateChart = 0,
		viewTemplateResult = 0;

	// list settings
	let listFormatSite = 'ul';

	// Texts of the form
	/** @type {Object<string,string>} */
	const texts = {};
	texts['nadpis_null'] = '';
	texts['vybrano'] = t('obecne.vybrano', $language);
	texts['vybrat_vse'] = t('obecne.vybrat_vse', $language);
	texts['zrusit_vse'] = t('obecne.zrusit_vse', $language);
	texts['rok_vydani'] = t('site.vedni_oblast.form_rok_vydani', $language);
	texts['vedni_oblast'] = t('site.vedni_oblast.form_vedni_oblast', $language);
	texts['druh_dokumentu'] = t('site.vedni_oblast.form_druh_dokumentu', $language);
	texts['export'] = t('site.vedni_oblast.form_export', $language);
	texts['razeni'] = t('site.vedni_oblast.form_razeni', $language);
	texts['format'] = t('site.vedni_oblast.form_format', $language);
	texts['error_druh'] = t('site.form.error_druh', $language);
	texts['error_rok'] = t('site.form.error_rok', $language);
	texts['zobrazit_vysl'] = t('site.vedni_oblast.zobrazit_vysl', $language);
	texts['vyberte_prosim'] = t('obecne.vyberte_prosim', $language, 'u');
	texts['soucet_vybrane_roky'] = t('site.form.soucet_vybrane_roky', $language, 'u');
	texts['zacatek'] = t('site.form.zacatek', $language, 'u');
	texts['konec'] = t('site.form.konec', $language, 'u');
	texts['predchozi'] = t('site.form.predchozi', $language, 'u');
	texts['dalsi'] = t('site.form.dalsi', $language, 'u');
	texts['strana'] = t('site.form.strana', $language, 'l');
	texts['z'] = t('site.form.z', $language, 'l');
	texts['nalezeno_zaznamu'] = t('site.form.nalezeno_zaznamu', $language, 'u');
	texts['neodpovida_zaznam'] = t('site.form.neodpovida_zaznam', $language, 'u');
	texts['chyba'] = t('site.form.chyba_zpracovani', $language, 'u');
	texts['ulozit_graf'] = t('obecne.ulozit_graf', $language, 'u');
	texts['export_tabulky_pdf'] = t('obecne.export_tabulky_pdf', $language, 'u');
	texts['export_tabulky_xlsx'] = t('obecne.export_tabulky_xlsx', $language, 'u');
	texts['export_tabulky_pdf'] = t('obecne.export_tabulky_pdf', $language, 'u');
	texts['tisk_tabulky'] = t('obecne.tisk_tabulky', $language, 'u');
	texts['graf_dole'] = t('chart.footer1', $language, 'u');
	texts['zvolit'] = t('site.form.zvolit', $language, 'u');
	texts['zrusit_vyber'] = t('site.form.zrusit_vyber', $language, 'l');
	texts['vyhledat'] = t('site.form.vyhledet', $language, 'u');
	texts['knihovna_nazev'] = t('obecne.knihovna_av_nazev', $language, 'u');
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
	texts['cordis'] = t('repozitory.cordis.abbr', $language, 'u');
	texts['cep'] = t('repozitory.cep.abbr', $language, 'u');
	texts['cep_text'] = t('repozitory.cep.text', $language, 'u');
	texts['katalog'] = t('repozitory.katalog.abbr', $language, 'u');
	texts['oddeleni'] = t('obecne.oddeleni', $language, 'u');
	texts['pocet_zaznamu'] = t('obecne.pocet_zaznamu', $language, 'u');
	texts['vysledek_v_riv'] = t('repozitory.riv.vysledek_v_riv', $language, 'u');
	texts['ip_adresy'] = t('obecne.pouze_ip_adresy', $language, 'u');
	texts['plny_text'] = t('obecne.plny_text', $language, 'l');
	texts['chyba_generace_dokumentu'] = t('obecne.gen_error', $language, 'l');

	/** @type {?Object<string,any>} */
	let outData = null;

	/** @type {?Object<string,any>} */
	let outData200 = null;

	/** @type {null|Array<?Array<Object<string,any>>>} */
	let outDataBlock = [];

	/** @type {?Array<Object<string,string|null|number>>} */
	let outDataHide = null;

	/** @type {Object<string, any>} */
	let formData = {};

	/** @type {?Object<string,any>} */
	let formDataAll = null;

	/** @type {?Array<Object<string,any>>} */
	let formDataFacets = null;

	/** @type {?Object<string,string|null|number>} */
	let formRequired = null;

	/** @type {?Object<string,string|null|number>} */
	let formErrors = null;

	/** @type {?Object<string,any>} */
	let dataConf = null;

	/** @type {String|Undefined} */
	let resultHideForm = '',
		classHideForm = '';

	/** @type {String} */
	let viewTemplate = '';

	/** @type {Object<string, any>} */
	let dataSend = {};

	/** @type {Views} */
	let views = new Views();

	/** @type {String} */
	let urlBase = '';

	/** @type {String} */
	let conf = '';

	/** @type {String} */
	let viewMode = 'html';

	$: isSubmitting = loading1 || loadingTextData || loadingChart ? true : false;

	onMount(() => {
		let idUstavDetailCall = idUstavDetail || $shortcuts.ustav || '';
		if (!dataFormBase.conf || !leftMenu) {
			return false;
		}

		let outDataSl = forms(
			leftMenu,
			s('server.forms_arl'),
			$language,
			dataFormBase.conf,
			idUstavDetailCall
		);

		outDataSl.then((dataVal) => {
			outData = dataVal.outData;
			if (outData) {
				for (let i in outData) {
					const outDataItem = outData[i];
					if (outDataItem && Array.isArray(outDataItem[3]) && outDataItem[3].length) {
						for (let j = 0; j < outDataItem[3].length; j++) {
							try {
								const regexArlArr = RegExp('^\\[.*\\]', '');
								if (regexArlArr.test(outDataItem[3][j][0]) == true) {
									let strChange = outDataItem[3][j][0];
									strChange = strChange.replace(/^\[|\]$/g, '');
									let arr = strChange.split(',');
									if (Array.isArray(arr) && arr.length) {
										outData[i][3][j][0] = arr;
									}
								}
							} catch (err) {
								// ignore intentionally
								void err;
							}
						}
					}
				}
			}

			outData200 = dataVal.outData200;
			outDataBlock = dataVal.outDataBlock;
			outDataHide = dataVal.outDataHide;
			formData = dataVal.formData;
			formDataAll = dataVal.formDataAll;
			formRequired = dataVal.formRequired;
			formErrors = dataVal.formErrors;
			dataConf = dataVal.outDataBlock200;
			if (dataFormBase.conf === 'US07' && outData200) {
				outData200[0]['0'] = 'US07';
				outData200[0]['3']['zobrazeni'] = 'US07';
			}
			formDataFacets = dataVal.outDataFacels;
			formData.conf = dataFormBase.conf;
			$searchStatisticGen = formData;
			const searchString = formData.conf || '-';
			const arrHideForms = settings.hide_forms || [];
			resultHideForm = arrHideForms.find((item) => item === searchString);
			classHideForm = resultHideForm ? 'lsc-form-hidden' : '';
			if (outDataBlock && outDataBlock.length === 0 && !resultHideForm) {
				outDataBlock = null;
				handleSite();
			} else {
				handleSite();
				setFormData();
				submitForm();
			}
		});
	});

	/**
	 * Additional form data settings
	 * @param {?Number} actSite
	 */
	const setFormData = (actSite = null) => {
		formData = $searchStatisticGen;
		formData.mutace = $language;
		if (sysno) {
			formData.projekt = sysno;
		}
		if (typeof formData.ustav !== 'undefined' && formData.ustav == '@AKTUALNI_USTAV') {
			formData.ustav = idUstavDetail;
		} else {
			formData.ustav = idUstavDetail;
		}
		let tAutor = null;
		if (typeof formData.autor !== 'undefined' && formData.autor == '@AKTUALNI_AUTOR') {
			tAutor = setIdAuthorLname(idAutor);
		} else {
			tAutor = idAutor ? setIdAuthorLname(idAutor) : formData.autor ? formData.autor : null;
		}
		if (tAutor) {
			formData.autor = tAutor;
		}
		if (typeof formData.ODDELENI !== 'undefined' && formData.ODDELENI == '@AKTUALNI_ODDELENI') {
			formData.ODDELENI = idOddeleni;
		}
		if (typeof formData.oddeleni !== 'undefined' && formData.oddeleni == '@AKTUALNI_ODDELENI') {
			formData.oddeleni = idOddeleni;
		}
		if (actSite !== null) {
			formData.site = actSite;
		}
		versionResult = 1;
		if (formData.conf === settings.authorConf) {
			versionResult = 2;
		}
	};

	// form validator
	const validFormErrors = () => {
		let out = true;
		for (let key in formData) {
			if (
				formRequired !== null &&
				typeof formRequired[key] !== 'undefined' &&
				formRequired[key] &&
				(typeof formData[key] === 'undefined' || formData[key].length < 1)
			) {
				// outData
				for (let key2 in outData) {
					if (outData[key2][0] == key) {
						if (!formErrors) {
							formErrors = {};
						}
						formErrors[key] = outData[key2][1];
						out = false;
					}
				}
			}
		}
		return out;
	};

	// update error message
	$: if ($searchStatisticGen) {
		if (typeof formData !== 'undefined' && formData) {
			setFormData();
			if (validFormErrors() == true) {
				validFormErrorsView = false;
			}
		}
	}

	let showResult = false;
	let versionResult = 1;
	let nameGraf1 = '';

	/** @type {?ReturnType<typeof setTimeout>} */
	let interval1 = null;
	/** @type {?ReturnType<typeof setTimeout>} */
	let interval2 = null;

	/** @type {Number} */
	const sl = 700;

	/** @type {Boolean} */
	let enableFacets = true;

	/** @type {Boolean} */
	let viewResultSite = false;
	let keyTemplate = 'VYSLEDKY';

	/**
	 * Set arl data
	 * @param {?CustomEvent} event
	 */
	const arlDataTrasnGraf = (event) => {
		if (event && event.detail.arlData) {
			dispatch('setArlData', {
				arlData: event.detail.arlData
			});
		}
	};

	/**
	 * set loader for chart and datagrid view
	 * @param {?CustomEvent} event
	 */
	const setLoaderChart = (event) => {
		if (event && event.detail.loading !== null) {
			loadingChart = event.detail.loading;
		}
	};

	/**
	 * set loader for data view
	 * @param {?CustomEvent} event
	 */
	const setLoadingScreen = (event) => {
		if (event && event.detail.loading !== null) {
			loadingTextData = event.detail.loading;
		}
	};

	/**
	 * Submit form
	 * @param {String} action
	 */
	const handleSubmit = async (action = 'formular') => {
		viewTemplate = '';
		viewMode = 'html';
		if (action == 'view-excel') {
			viewMode = 'excel';
		} else {
			showResult = false;
			loading1 = false;
			loadingTextData = false;
		}
		dataSend = {};

		/**
		 * Template choice
		 * @type {String}
		 */
		viewTemplate = formUtils.getTemplate(outData200);

		if ((viewTemplate === 'normal' && formUtils.isResult(outData200)) || resultHideForm) {
			keyTemplate = 'VYSLEDKY';
			/** @type {?String} */
			urlBase = '';
			conf = 'side-order';

			if (formData.conf === 'KONFIG_STRANA_UT04' || formData.conf === 'UT04') {
				urlBase = s('server.formsSendAuthor') || '';
				dataSend = formData;
				conf = 'author';
				enableFacets = false;
			} else if (viewMode == 'excel') {
				urlBase = s('server.formsSendStranka') || '';
				formData = formsTransSend(formData, 'ustav');
				dataSend = urlSorter(formData);
				conf = '';
			} else {
				urlBase = s('server.formsSendStranka') || '';
				formData = formsTransSend(formData, 'ustav');
				dataSend = urlSorter(formData);
				conf = '';
			}
			showResult = true;
			loadingTextData = true;
			viewTemplateResult = views.getKeyView(viewTemplateResult);
		}

		if (viewMode === 'excel') {
			loading1 = false;
			loadingTextData = false;
			return false;
		}

		if (viewTemplate === 'normal' && formUtils.isChart(outData200)) {
			keyTemplate = 'CHART';
			chartType = formUtils.getTypeChart(outData200);
			formData = formsTransSend(formData, 'ustav');
			dataSend = urlSorter(formData);
			viewTemplateChart = views.getKeyView(viewTemplateChart);
		}

		if (viewTemplate === 'US07') {
			keyTemplate = 'US07';
			chartType = formUtils.getTypeChart(outData200);

			// set form data
			formData = formsTransSend(formData, 'ustav');
			dataSend = urlSorter(formData);

			// set new templates id for US07
			viewTemplateUS07 = views.getKeyView(viewTemplateUS07);
		}

		if (
			viewTemplate === 'normal' &&
			action === 'formular' &&
			enableFacets &&
			formUtils.isResult(outData200) &&
			!settings.v7test
		) {
			loading1 = true;
			let outDataArlFazety = formFacets(
				s('server.formsSendStranka'),
				dataSend,
				formDataFacets
			);
			outDataArlFazety.then(() => {
				if (!interval2) {
					interval2 = setTimeout(function () {
						loading1 = false;
					}, sl);
				} else {
					if (interval1) {
						clearTimeout(interval1);
					}
					interval2 = setTimeout(function () {
						loading1 = false;
					}, sl);
				}
			});
		}
	};

	function handleSubmitValid(actSite = 1) {
		setFormData(actSite);
		if (!validFormErrors()) {
			validFormErrorsView = true;
		} else {
			handleSubmit();
		}
	}

	function handleSite() {
		if (formData.conf === settings.departmentListConf) {
			viewResultSite = true;
		}
	}

	// start form after is loaded data
	function submitForm() {
		if (!formStart) {
			return false;
		}
		const event = new Event('submit', {
			bubbles: true,
			cancelable: true
		});
		setTimeout(() => {
			if (formStart) {
				formStart.dispatchEvent(event);
			}
		}, 50);
	}
</script>

<form
	bind:this={formStart}
	on:submit|preventDefault={() => handleSubmitValid(1)}
	id="lsc-form"
	class={!classHideForm && !viewResultSite ? 'lsc-form' : 'lsc-form lsc-form-hidden'}
>
	{#if outDataBlock}
		{#each outDataBlock as outData2, i (i)}
			<div class="l-form-gen">
				{#if outData2}
					{#each outData2 as dataItem, keyItem (keyItem)}
						{#if dataItem[4] == 'Multi-select' || dataItem[4] == 'Multi-selekt'}
							<MultiSelect {texts} {dataItem} {formDataAll} />
						{:else if (dataItem[4] == 'Select' || dataItem[4] == 'Selekt') && dataFormBase.conf == settings.conf_select_project && dataItem[0] == settings.slave_select_project}
							<SelectSlave {texts} {dataItem} conf={dataFormBase.conf} />
						{:else if (dataItem[4] == 'Select' || dataItem[4] == 'Selekt') && dataFormBase.conf == settings.conf_select_project && dataItem[0] == settings.master_select_project}
							<SelectMaster {texts} {dataItem} conf={dataFormBase.conf} />
						{:else if dataItem[4] == 'Select' || dataItem[4] == 'Selekt'}
							<Select {texts} {dataItem} />
						{:else if dataItem[4] == 'Select-search'}
							<SelectSearch {texts} {dataItem} />
						{:else if dataItem[4] == 'Text'}
							<Text {texts} {dataItem} />
						{:else if dataItem[4] == 'Checkbox'}
							<Checkbox {texts} {dataItem} {idUstavDetail} />
						{:else if dataItem[4] == 'Hidden' || dataItem[4] == ''}
							<Hidden {texts} {dataItem} />
						{:else if dataItem[4] == 'Radio-select' || dataItem[4] == ''}
							<RadioSelect {texts} {dataItem} />
						{/if}
					{/each}
				{/if}
			</div>
		{/each}
		<div class="lsc-form-con--button">
			{#if validFormErrorsView && formErrors}
				{#each Object.entries(formErrors) as [key, value], index (key)}
					{#if value !== '' && value}
						<div class="c-message-error">
							<div>{texts['vyberte_prosim']}: {value}</div>
						</div>
					{/if}
				{/each}
			{/if}
			<div class="l-form-gen--button lsc-form__item--send lsc-form-buttom">
				{#if !resultHideForm}
					<button type="submit" disabled={isSubmitting}>{texts['zobrazit_vysl']}</button>
				{/if}
				<input type="hidden" name="left-menu" bind:value={leftMenu} />
				<input type="hidden" name="menu" bind:value={leftMenu} />
				<input type="hidden" name="ustav" bind:value={idUstavDetail} />
				{#if idOddeleni}
					<input type="hidden" name="oddeleni" bind:value={idOddeleni} />
				{/if}
				<input type="hidden" name="conf" bind:value={dataFormBase.conf} />
				<input type="hidden" name="menu" bind:value={dataFormBase.menu} />
				<input type="hidden" name="url" bind:value={dataFormBase.url} />
			</div>
		</div>
		{#if outDataHide}
			{#each outDataHide as dataItem, i (i)}
				<div class="l-form-gen">
					{#if dataItem && dataItem[4] && dataItem[4] == 'Hidden'}
						<Hidden {texts} {dataItem} />
					{/if}
				</div>
			{/each}
		{/if}
	{/if}
</form>

{#if keyTemplate == 'CHART'}
	{#key viewTemplateChart}
		<ViewChart
			{dataSend}
			{outData}
			{outData200}
			{texts}
			{chartType}
			{nadpisForm}
			{nameGraf1}
			on:setArlDataGr={arlDataTrasnGraf}
			on:setLoader={setLoaderChart}
		/>
	{/key}
{:else if 0}
	<div id="vysledek-vyhledavani-c" class="c-loader">
		<Loader />
	</div>
{:else}
	{#if showResult && versionResult === 1}
		{#key viewTemplateResult}
			<ViewSiteResult
				{dataSend}
				{dataConf}
				{texts}
				{outData200}
				{formData}
				{urlBase}
				{conf}
				{viewMode}
				{setFormData}
				{handleSubmit}
				on:setArlDataRes={arlDataTrasnGraf}
				on:setLoader={setLoadingScreen}
			/>
		{/key}
	{:else if showResult && versionResult === 2}
		<div id="vysledek-vyhledavani-c">
			{#key viewTemplateResult}
				<ViewSiteAuthor
					{dataSend}
					{formData}
					{texts}
					{urlBase}
					{conf}
					{setFormData}
					on:setArlDataRes={arlDataTrasnGraf}
					on:setLoader={setLoadingScreen}
				/>
			{/key}
		</div>
	{:else if viewResultSite}
		<div id="vysledek-vyhledavani-c">
			<ViewDepartment {formData} {outData} {outData200} {listFormatSite} />
		</div>
	{/if}
{/if}



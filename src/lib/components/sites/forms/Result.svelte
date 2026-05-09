<script>

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?Object<string, any>} */
	export let dataArl = null;

	/** @type {?Array<Object>} */
	export let dataArlFacets = null;

	/** @type {?Object<string,any>} */
	export let dataConf = null;

	/** @type {?Function} */
	export let setFormData = null;

	/** @type {?Function} */
	export let handleSubmit = null;

	/** @type {?Object<string,any>} */
	export let outData200 = null;

	/** @type {?Object<string, string | Object<string, string>>} */
	export let dataSend = null;

	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	const base = settings.domena;

	/** @type {boolean | number} */
	let firstNumber = false;

	if (!Array.isArray(dataArlFacets) || dataArlFacets.length == 0) {
		dataArlFacets = null;
	}

	// components
	import Paginating from '$lib/components/sites/forms/formbase/Paginating.svelte';
	import SelectZobrazovak from '$lib/components/sites/forms/formbase/SelectZobrazovak.svelte';

	// view komp.
	let viewStrankovani = false;

	// stores
	import { language } from '$lib/stores/language';
	import { authors } from '$lib/stores/authors.js';
	import { shortcuts } from '$lib/stores/shortcuts';
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';

	// utils
	import { t } from '$lib/utils/translate';
	import { printEx } from '$lib/utils/export/printEx.js';
	import { exportName } from '$lib/utils/export/exportName.js';
	import { auxilitary } from '$lib/utils/outcome/auxilitary.js';
	import { numberingFirstItem } from '$lib/utils/arl/numberingFirstItem.js';
	import { pdfExServer } from '$lib/utils/export/pdfExServer.js';
	import { validSettings } from '$lib/services/validSettings.js';
	import { csvEx } from '$lib/utils/export/csvEx.js';
	import { FormUtils } from '$lib/utils/jsloader/Forms/FormUtils.js';
	const formUtils = new FormUtils();

	// static
	import ImgPrint from '$lib/static/img/tisk.svg';
	import ImgExcel from '$lib/static/img/excel.svg';
	import ImgPdf from '$lib/static/img/pdf.svg';

	// dataTrideni
	/** @type {Object<string,string|Array<Object<string,?string>>>} */
	const dataTrideni = {};
	dataTrideni.name = 'trideni';
	dataTrideni.data = [];
	if (dataConf && typeof dataConf.trideni !== 'undefined' && dataConf.trideni.length > 0) {
		dataTrideni.data = dataConf.trideni;
	}
	// dataZf
	/** @type {Object<string,string|Array<Object<string,?string>>>}*/
	let dataZf = {};
	dataZf.name = 'zf';
	dataZf.data = [];
	if (dataConf && typeof dataConf.zf !== 'undefined' && dataConf.zf.length > 0) {
		dataZf.data = dataConf.zf;
	}
	// authors
	$authors = [];
	if (dataArl && typeof dataArl !== 'undefined' && typeof dataArl.autor !== 'undefined') {
		$authors[0] = {};
		$authors[0]['0'] = dataArl.autor;
		$authors[0]['1'] = dataArl.authorName;
	}

	let outRecords = [];
	let nenalezeno = texts['neodpovida_zaznam'];
	let nalezeno = 0;
	if (dataArl && typeof dataArl !== 'undefined' && typeof dataArl.records !== 'undefined') {
		outRecords = dataArl.records;
		if (outRecords.length > 0) {
			viewStrankovani = true;
			nalezeno = dataArl.hits;
			nenalezeno = '';
		} else if (dataArl.hits === 0 || dataArl.hits === '0') {
			nenalezeno = texts['neodpovida_zaznam'];
		}
		else {
			nenalezeno = texts['chyba'];
		}
	} else {
		nenalezeno = texts['chyba'];
	}

	/** @type {Array<Object<string,string>>} */
	let outAuxiliary = [];

	/** @type {Array<Boolean>} Array - info about RIV */
	let arrRivInfo = [];

	/** @type {Array<Boolean>} Array - info about RIV */
	let arrEndProjects = [];

	/** @type {string} Name of base CSS class for auxiliary */
	let auxiliaryBaseClass = 'c-records';

	if (
		dataArl &&
		typeof dataArl !== 'undefined' &&
		typeof dataArl.auxiliary !== 'undefined' &&
		dataSend
	) {
		firstNumber = numberingFirstItem(dataArl, dataSend, settings);
		let searchString = (dataSend.conf && typeof dataSend.conf === 'string') ? dataSend.conf.replace('KONFIG_STRANA_', '') : '-';
		let resultAuxilitary = validSettings(searchString, 'auxilitary_projects');
		let resultAuxilitaryCep = validSettings(searchString, 'auxilitary_projects_cep');

		/** @type {Object<string,Boolean|String>}*/
		const conf = {};
		if (resultAuxilitary || resultAuxilitaryCep) {
			conf.urlResults = base + m('menu.zvolitUstav', $language) + $shortcuts.ustav;
			const keyToFind = settings.auxilitary_projects_cep_detail.toString();
			for (let i = 0; i < $instituteLeftMenu.valMenu.length; i++) {
				if ($instituteLeftMenu.valMenu[i]) {
					/** @type {Array<Object<string, string>>} */
					const itemVal = $instituteLeftMenu.valMenu[i];
					const foundItem = itemVal.find((item) => item['0'] === keyToFind);
					if (foundItem && foundItem[2]) {
						conf.urlResults =
							base + m('menu.zvolitUstav', $language) + $shortcuts.ustav + '/' + foundItem[2];
					}
				}
			}
		}
		
		let dataUstavStr = '';
		if (!dataSend.ustav) {
			dataUstavStr = '-';
		}
		if (resultAuxilitary) {
			conf.results = true;
			conf.resultsCep = false;
			outAuxiliary = auxilitary(dataArl.auxiliary, texts, dataUstavStr, conf);
			auxiliaryBaseClass = 'c-records-results';
		} else if (resultAuxilitaryCep) {
			conf.results = true;
			conf.resultsCep = true;
			conf.form_projekty = dataSend.projekty.toString() || '';
			outAuxiliary = auxilitary(dataArl.auxiliary, texts, dataUstavStr, conf);
			auxiliaryBaseClass = 'c-records-results';
		} else {
			conf.results = false;
			conf.resultsCep = false;
			outAuxiliary = auxilitary(dataArl.auxiliary, texts, dataUstavStr);
			auxiliaryBaseClass = 'c-records';
		}

		let resultOthers = validSettings(searchString, 'riv_others_active');
		let resultFinished = validSettings(searchString, 'end_project');
		for (let i = 0; i < dataArl.auxiliary.length; i++) {
			let itemInfo = dataArl.auxiliary[i]?.others || null;
			let itemFinished = dataArl.auxiliary[i]?.finished || null;
			arrRivInfo[i] = itemInfo == '1' && resultOthers ? true : false;
			arrEndProjects[i] = itemFinished == '1' && resultFinished ? true : false;
		}
	}
	let outExport = formUtils.export200(outData200);
	const csvIkonaEx = outExport.find((item) => item === 'CSV');
	const pdfIkonaEx = outExport.find((item) => item === 'PDF');
	const tiskIkonaEx = outExport.find((item) => item === 'STRANA');

	const sysnoRoute = () => {
		let lastHash = window.location.hash;
		if (lastHash)
			window.addEventListener('hashchange', () => {
				if (window.location.hash !== lastHash) {
					if (window.location.hash.includes('/sysno/')) {
						window.scrollTo({ top: 0 });
						window.location.reload();
					}
					lastHash = window.location.hash;
				}
			});
	};
	sysnoRoute();
	let pdfExServerActive = false;
	/**
	 * Export pdf
	 * @param {string} url
	 * @param {Object[]} data
	 * @param {string} lang
	 */
	const pdfExServerSv = async (url, data, lang) => {
		if (pdfExServerActive) {
			return;
		}
		pdfExServerActive = true;
		const d = new Date();
		const minutes = String(d.getMinutes()).padStart(2, '0');
		const hour = String(d.getHours()).padStart(2, '0');
		const day = String(d.getDate()).padStart(2, '0');
		const mouth = String(d.getMonth() + 1).padStart(2, '0');
		const year = d.getFullYear();
		const nameOfFile = year + '-' + mouth + '-' + day + '--' + hour + '-' + minutes + '--analytika-cav';
		// read pdf
		pdfExServer(url, data, nameOfFile, lang).then((result) => {
			if (result) {
				setTimeout(() => {
					pdfExServerActive = false;
				}, 1150);
			}
		});
	};

	let printExSvActive = false;
	const printExSv = async (id, idTime, text1, text2) => {
		if (printExSvActive) {
			return;
		}
		printExSvActive = true;
		printEx(id, idTime, text1, text2);
		setTimeout(() => {
			printExSvActive = false;
		}, 1150);
	};

	/**
	 * Export CSV Data
	 * @param {string} lang
	 */
	const csvExSv = async (lang) => {
		csvEx(dataSend, $shortcuts, lang).then((result) => {
			if (result) {
				const resultString = result.join('\n');
				const blob = new Blob([resultString], { type: 'text/csv;charset=utf-8;' });
				const url = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = exportName('analytika-cav','csv') // 'asep-export.csv'; // Název souboru pro stažení
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				URL.revokeObjectURL(url);
			}
		});
	};
</script>

<div class="l-vysledek-vyhledavani" id="vysledek-vyhledavani">
	<div class="l-vysledek-vyhledavani_data">
		{#if viewStrankovani}
			<div class="c-container-vysledky1">
				<div class="c-vysledky1-nalezeno">
					{texts['nalezeno_zaznamu']}: <strong>{nalezeno}</strong>
				</div>
				<SelectZobrazovak {dataTrideni} {dataZf} {texts} {handleSubmit} />
			</div>
		{/if}
		{#if nenalezeno}
			<div class="l-nenalezeno">
				<em>{nenalezeno}.</em>
			</div>
		{:else}
			{#if outExport.length > 0}
				<ul class="lsc-cav-export c-cav-export--toolt01">
					{#if csvIkonaEx}
						<li>
							<button type="button" on:click|preventDefault={() => csvExSv($language)}>
								<img
									src={ImgExcel}
									alt={t('header.img.logo', $language)}
									width="24"
									height="24"
									loading="lazy"
								/>
							</button>
							<p class="bem-tool">
								<span style="padding:0.2rem;">{t('tabulator.toolt_excel_csv', $language, 'u')}</span
								>
							</p>
						</li>
					{/if}
					{#if pdfIkonaEx}
						<li>
							<button
								type="button"
								on:click|preventDefault={() =>
									pdfExServerSv(settings.pdf_ex, outRecords, $language)}
								class:btn-active={pdfExServerActive}
							>
								<img
									src={ImgPdf}
									alt={t('header.img.logo', $language)}
									width="24"
									height="24"
									loading="lazy"
								/>
							</button>
							<p class="bem-tool bem-tool2">{t('tabulator.toolt_pdf_data', $language, 'u')}</p>
						</li>
					{/if}
					{#if tiskIkonaEx}
						<li>
							<button
								type="button"
								on:click|preventDefault={() =>
									printExSv(
										'vysledek-vyhledavani__data',
										'vysledek-vyhledani__data-time',
										texts['knihovna_nazev'],
										texts['knihovna_nazev']
									)}
								class:btn-active={printExSvActive}
							>
								<img
									src={ImgPrint}
									alt={t('header.img.logo', $language)}
									width="24"
									height="24"
									loading="lazy"
								/>
							</button>
							<p class="bem-tool bem-tool3">{t('tabulator.toolt_tisk_data', $language, 'u')}</p>
						</li>
					{/if}
				</ul>
			{/if}
			{#if viewStrankovani}
				<Paginating {dataArl} {texts} {handleSubmit} {setFormData} />
			{/if}
			<div class="c-records-container" id="vysledek-vyhledavani__data">
				{#each outRecords as outItem, keyItem}
					{@html outAuxiliary[keyItem]['header']}
					<div class={auxiliaryBaseClass}>
						<div class="{auxiliaryBaseClass}__item1 mt-1">
							{#if firstNumber && typeof firstNumber === 'number'}
								<span class="c-numbering">{firstNumber + keyItem}.</span>
							{/if}
							{@html outItem}
							{#if arrRivInfo[keyItem]}
								<p class="c-riv-info">{t('obecne.info_text_riv', $language)}</p>
							{/if}
							{#if arrEndProjects[keyItem]}
								<p class="c-riv-info mb-2">{t('obecne.info_text_ukonceny_projekt', $language)} !</p>
							{/if}
						</div>
						{#if typeof outAuxiliary[keyItem] !== 'undefined' && outAuxiliary[keyItem]}
							<div class="{auxiliaryBaseClass}__item2 mt-1" data-html2canvas-ignore>
								{@html outAuxiliary[keyItem]['data']}
							</div>
						{/if}
					</div>
				{/each}
				<div id="vysledek-vyhledani__data-time"></div>
			</div>
			{#if viewStrankovani}
				<Paginating {dataArl} {texts} {handleSubmit} {setFormData} />
			{/if}
		{/if}
	</div>
	{#if dataArlFacets}
		<div class="l-vysledek-vyhledavani__facets">
			{#each dataArlFacets as outItemF, i (i)}
				<div class="c-facets">
					<h3>{outItemF.headline}</h3>
					{#each outItemF.data as outItemFData, i (i)}
						<div class="c-facets-item">
							<p>{outItemFData.key}</p>
							<p><strong>{outItemFData.val}</strong></p>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>





<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlData200').ArlData200} ArlData200 */
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataTrideni.js').ArlDataTrideni} ArlDataTrideni */

	/** @type {Object<string, any>} */
	export let dataSend = {};

	/** @type {?Object<string,any>} */
	export let dataConf = null;

	/** @type {ArlData200}*/
	export let outData200 = null;

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {Object<string, any>} */
	export let formData = {};

	/** @type {String} */
	export let urlBase = '';

	/** @type {String} */
	export let conf = '';

	/** @type {String} */
	export let viewMode = '';

	/** @type {?Function} */
	export let handleSubmit;

	/** @type {?Function} */
	export let setFormData = null;

	/** @type {Number} */
	const sl = 700;

	/** @type {?ReturnType<typeof setTimeout>} */
	let interval3 = null;

	/** @type {Boolean} */
	let errorGen = false;

	// components
	import Loader from '$lib/components/sites/lib/Loader.svelte';
	import SelectZobrazovak from '$lib/components/sites/forms/formbase/SelectZobrazovak.svelte';
	import Paginating from '$lib/components/sites/forms/formbase/Paginating.svelte';

	// stores
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';
	import { authors } from '$lib/stores/authors.js';

	// utilitis
	import { t } from '$lib/utils/translate';
	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	const base = settings.domena;
	import { formSitesResult } from '$lib/utils/jssender/formSitesResult.js';
	import { numberingFirstItem } from '$lib/utils/arl/numberingFirstItem.js';
	import { validSettings } from '$lib/services/validSettings.js';
	import { auxilitary } from '$lib/utils/outcome/auxilitary.js';
	import { pdfExServer } from '$lib/utils/export/pdfExServer.js';
	import { csvEx } from '$lib/utils/export/csvEx.js';
	import { printEx } from '$lib/utils/export/printEx.js';
	import { exportName } from '$lib/utils/export/exportName.js';
	import { FormUtils } from '$lib/utils/jsloader/Forms/FormUtils.js';
	const formUtils = new FormUtils();

	// static
	import ImgPrint from '$lib/static/img/tisk.svg';
	import ImgExcel from '$lib/static/img/excel.svg';
	import ImgPdf from '$lib/static/img/pdf.svg';

	/** @type {ArlDataTrideni} - dataTrideni*/
	const dataTrideni = {};
	dataTrideni.name = 'trideni';
	dataTrideni.data = [];
	if (dataConf && typeof dataConf.trideni !== 'undefined' && dataConf.trideni.length > 0) {
		dataTrideni.data = dataConf.trideni;
	}

	/** @type {ArlDataTrideni} - dataZf */
	let dataZf = {};
	dataZf.name = 'zf';
	dataZf.data = [];
	if (dataConf && typeof dataConf.zf !== 'undefined' && dataConf.zf.length > 0) {
		dataZf.data = dataConf.zf;
	}
	/** @type {Array<Object<string,string>>} */
	let outAuxiliary = [];

	/** @type {Array<Boolean>} Array - info about RIV */
	let arrRivInfo = [];

	/** @type {Array<Boolean>} Array - info about RIV */
	let arrEndProjects = [];

	/** @type {string} Name of base CSS class for auxiliary */
	let auxiliaryBaseClass = 'c-records';

	/** @type {boolean} */
	let loading = true;

	/** @type {boolean | number} */
	let firstNumber = false;

	// view komp.
	let showPagination = false;

	let notFound = '';
	let find = 0;
	let outExport = null;

	/** @type {?String} */
	let csvIkonaEx = null;

	/** @type {?String} */
	let pdfIkonaEx = null;

	/** @type {?String} */
	let tiskIkonaEx = null;

	/** @type {Array<String>}*/
	let outRecords = [];

	let pdfExServerActive = false;

	let printExSvActive = false;

	// set site number
	let stranka = 1;
	if (typeof formData.site !== 'undefined' && formData.site !== null) {
		stranka = formData.site;
	}

	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataText').ArlDataText} ArlDataText */
	/** @type {?ArlDataText} */
	let dataArl = null;

	onMount(() => {
		loading = true;
		dispatch('setLoader', { loading });
		if (typeof dataSend.conf !== 'undefined') {
			let outDataArl = formSitesResult(stranka, urlBase, dataSend, $language);
			outDataArl.then((dataValLs) => {
				if (interval3) {
					clearTimeout(interval3);
				}
				interval3 = setTimeout(function () {
					loading = false;
					dispatch('setLoader', { loading });
				}, sl);
				dataArl = dataValLs;

				// authors
				$authors = [];
				if (dataArl && typeof dataArl !== 'undefined' && typeof dataArl.autor !== 'undefined') {
					$authors[0] = {};
					$authors[0]['0'] = dataArl.autor;
					$authors[0]['1'] = dataArl.authorName;
				}

				// sort out
				notFound = texts['neodpovida_zaznam'];
				if (dataArl && typeof dataArl !== 'undefined' && typeof dataArl.records !== 'undefined') {
					outRecords = dataArl.records;
					if (outRecords.length > 0) {
						showPagination = true;
						find = dataArl.hits || 0;
						notFound = '';
					} else if (dataArl.hits === 0) {
						notFound = texts['neodpovida_zaznam'];
					} else {
						notFound = texts['chyba'];
					}
				} else {
					notFound = texts['chyba'];
				}

				if ($shortcuts.autor) {
					dispatch('setArlDataRes', {
						arlData: dataArl
					});
				}

				// load arl datas
				if (
					dataArl &&
					typeof dataArl !== 'undefined' &&
					typeof dataArl.auxiliary !== 'undefined' &&
					dataSend
				) {
					firstNumber = numberingFirstItem(dataArl, dataSend, settings);
					let searchString = dataSend.conf ? dataSend.conf.replace('KONFIG_STRANA_', '') : '-';
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
					if (resultAuxilitary) {
						conf.results = true;
						conf.resultsCep = false;
						outAuxiliary = auxilitary(dataArl.auxiliary, texts, dataSend.ustav, conf);
						auxiliaryBaseClass = 'c-records-results';
					} else if (resultAuxilitaryCep) {
						conf.results = true;
						conf.resultsCep = true;
						conf.form_projekty = dataSend.projekty.toString() || '';
						outAuxiliary = auxilitary(dataArl.auxiliary, texts, dataSend.ustav, conf);
						auxiliaryBaseClass = 'c-records-results';
					} else {
						conf.results = false;
						conf.resultsCep = false;
						outAuxiliary = auxilitary(dataArl.auxiliary, texts, dataSend.ustav);
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
			});

			if (outData200) {
				outExport = formUtils.export200(outData200);
				csvIkonaEx = outExport.find((item) => item === 'CSV') || '';
				pdfIkonaEx = outExport.find((item) => item === 'PDF') || '';
				tiskIkonaEx = outExport.find((item) => item === 'STRANA') || '';
			}

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
		}
	});
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
		const nazev = year + '-' + mouth + '-' + day + '--' + hour + '-' + minutes + '--analytika-cav';

		// generation file
		pdfExServer(url, data, nazev, lang).then((result) => {
			if (result) {
				setTimeout(() => {
					pdfExServerActive = false;
				}, 200);
			} else {
				errorGen = true;
			}
		});
	};

	/**
	 * Print document
	 * @param {string} id
	 * @param {string} idTime
	 * @param {string} text1
	 * @param {string} text2
	 */
	const printExSv = async (id, idTime, text1, text2) => {
		if (printExSvActive) {
			return;
		}
		printExSvActive = true;
		printEx(id, idTime, text1, text2);
		setTimeout(() => {
			printExSvActive = false;
		}, 500);
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
				link.download = exportName('analytika-cav', 'csv'); // 'asep-export.csv'; // Název souboru pro stažení
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				URL.revokeObjectURL(url);
			}
		});
	};
</script>

{#if errorGen}
	<div class="c-message-error"><div>Chyba při generování dokumentu došlo k chybě.</div></div>
{/if}

{#if loading}
	<div id="vysledek-vyhledavani-c" class="c-loader">
		<Loader />
	</div>
{:else}
	<div id="vysledek-vyhledavani-c">
		<div class="l-vysledek-vyhledavani" id="vysledek-vyhledavani">
			<div class="l-vysledek-vyhledavani_data">
				{#if showPagination}
					<div class="c-container-vysledky1">
						<div class="c-vysledky1-nalezeno">
							{texts['nalezeno_zaznamu']}: <strong>{find}</strong>
						</div>
						<SelectZobrazovak {dataTrideni} {dataZf} {texts} {handleSubmit} />
					</div>
				{/if}
				{#if notFound}
					<div class="l-nenalezeno">
						<em>{notFound}.</em>
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
										<span style="padding:0.2rem;"
											>{t('tabulator.toolt_excel_csv', $language, 'u')}</span
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
					{#if showPagination}
						<Paginating {dataArl} {texts} {handleSubmit} {setFormData} />
					{/if}
					<div class="c-records-container" id="vysledek-vyhledavani__data">
						{#each outRecords as outItem, keyItem (keyItem)}
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
										<p class="c-riv-info mb-2">
											{t('obecne.info_text_ukonceny_projekt', $language)} !
										</p>
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
					{#if showPagination}
						<Paginating {dataArl} {texts} {handleSubmit} {setFormData} />
					{/if}
				{/if}
			</div>
		</div>
	</div>
{/if}
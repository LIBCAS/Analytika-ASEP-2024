<script>
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';

	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataChart.js').ArlDataChart} ArlDataChart */

	// static
	import ImgPrint from '$lib/static/img/tisk.svg';
	import ImgExcel from '$lib/static/img/excel.svg';
	import ImgPdf from '$lib/static/img/pdf.svg';

	// utils
	import { t } from '$lib/utils/translate';
	import { pdfExServerTable } from '$lib/utils/export/pdfExServer.js';

	/**
	 * Dynamic object to store arl data
	 * @typedef {Object} DynamicObjectArl
	 * @property {?number | string | Object[] | Object} [key]
	 */
	/**
	 * Container for arl data
	 * @typedef {Object.<string, DynamicObjectArl>} ObjectContainerArl
	 */

	/** @type {?Object<string,any>} */
	export let outData = {};

	/** @type  {Object<string,?number|string|Array<String|Number>>} */
	/** @type {?ArlDataChart} */
	export let dataArlGraf1 = {};

	/** @type {String} */
	export let nadpisForm = '';

	/** @type {Object.<string, string>} */
	export const texts = {};

	/** @type {?String}*/
	export let chartType = null;

	/** @type {?String|Number}*/
	export let id = '0';
	id = id ? id.toString() : '0';

	import { Text as TextServis } from '$lib/services/Text.js';
	const text = new TextServis();

	// components
	import { CavGridTableDepartment } from '$utils/tabulator/CavGridTableDepartment.js';

	import settings from '$lib/settings';
	let base = settings.domena;

	// stores
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utils
	import { m } from '$lib/utils/menuUrl';

	/**
	 * @type {null|CavGridTableDepartment}
	 */
	let objTableData = null;
	objTableData = new CavGridTableDepartment();

	/** @type {?string} */
	let message = null;
	let viewData = false;

	/** @type {?import('tabulator-tables').TabulatorFull} */
	let table = null;

	let autoHeightrunner = false;

	/**
	 * Auto Height - set maximum height for all columns
	 * @param {string} idTab
	 */
	const autoHeight = (idTab) => {
		/** @type{number}*/
		let maxHeight = 0;
		if (!autoHeightrunner) {
			autoHeightrunner = true;
			/** @type {NodeListOf<HTMLDivElement>} */
			const tabs = document.querySelectorAll(idTab + ' .tabulator-header .tabulator-col');
			const run = () => {
				setTimeout(() => {
					tabs.forEach(function (col) {
						maxHeight = Math.max(maxHeight, col.offsetHeight || 0);
					});
				}, 100);
				setMaxHeight();
			};
			const setMaxHeight = () => {
				setTimeout(() => {
					if (maxHeight) {
						tabs.forEach(function (col) {
							col.style.minHeight = maxHeight + 'px';
						});
						autoHeightrunner = false;
					}
				}, 100);
			};
			run();
		}
	};

	onMount(async () => {
		if (chartType == 'prehled_oddeleni') {
			objTableData.setView = 'prehled_oddeleni';
		}
		objTableData.setTabledata = dataArlGraf1?.table;
		objTableData.setTableColumns = dataArlGraf1?.columns;
		objTableData.setTableOutData = outData;
		message = '';
		const winWidth = window.innerWidth || 0;
		let columsTable = objTableData.getColumns();
		if (typeof columsTable[0] === 'object' && columsTable[0] !== null) {
			if (winWidth > 500) {
				columsTable[0].width = 280;
			} else {
				columsTable[0].width = 180;
			}
		}
		const urlAuthorBase =
			base + m('menu.zvolitUstav', $language) + $shortcuts.ustav + '' + m('autor', $language) + '#';
		const dataTable = objTableData.getData(urlAuthorBase, 'author');

		let pagination = false;
		if (dataTable && dataTable.length > 50) {
			pagination = true;
		}
		viewData = true;
		if (chartType == 'prehled_oddeleni') {
			setTimeout(() => {
				const elementTab = document.querySelector('.c-cav-grid__table_' + id);
				if (elementTab) {
					table = new Tabulator('.c-cav-grid__table_' + id, {
						debugInvalidOptions: false,
						columns: columsTable,
						data: dataTable,
						initialSort: [{ column: columsTable[0].field, dir: 'asc' }],
						layout: 'fitColumns',
						selectable: true
					});
					table.on('tableBuilt', function () {
						autoHeight('.c-cav-grid__table_' + id);
					});
					table.on('columnResized', function () {
						autoHeight('.c-cav-grid__table_' + id);
					});
				}
			}, 100);
		} else {
			setTimeout(() => {
				const elementTab = document.querySelector('.c-cav-grid__table_' + id);
				if (elementTab && pagination) {
					table = new Tabulator('.c-cav-grid__table_' + id, {
						locale: true,
						langs: {
							default: {
								groups: {
									item: t('tabulator.list.groups.item', $language),
									items: t('tabulator.list.groups.items', $language)
								},
								pagination: {
									first: t('tabulator.list.first', $language),
									first_title: t('tabulator.list.first_title', $language),
									last: t('tabulator.list.last', $language),
									last_title: t('tabulator.list.last_title', $language),
									prev: t('tabulator.list.prev', $language),
									prev_title: t('tabulator.list.prev_title', $language),
									next: t('tabulator.list.next', $language),
									next_title: t('tabulator.list.next_title', $language),
									page_size: t('tabulator.list.page_size', $language)
								}
							}
						},
						columns: columsTable,
						debugInvalidOptions: false,
						pagination: 'local',
						paginationSize: 50,
						data: dataTable,
						initialSort: [{ column: columsTable[0].field, dir: 'asc' }],
						layout: 'fitColumns',
						selectable: true
					});
					table.on('tableBuilt', function () {
						autoHeight('.c-cav-grid__table_' + id);
					});
					table.on('columnResized', function () {
						autoHeight('.c-cav-grid__table_' + id);
					});
				} else if (elementTab) {
					table = new Tabulator('.c-cav-grid__table_' + id, {
						columns: columsTable,
						debugInvalidOptions: false,
						data: dataTable,
						initialSort: [{ column: columsTable[0].field, dir: 'asc' }],
						layout: 'fitColumns',
						selectable: true
					});
					table.on('tableBuilt', function () {
						autoHeight('.c-cav-grid__table_' + id);
					});
					table.on('columnResized', function () {
						autoHeight('.c-cav-grid__table_' + id);
					});
				}
			}, 100);
		}
	});

	function downloadExcel() {
		const soubor = text.genUrlFromString(nadpisForm);
		if (typeof table === 'object' && table !== null) {
			table.download('xlsx', soubor + '.xlsx', { sheetName: 'data' });
		}
	}

	function print() {
		if (typeof table === 'object' && table !== null) {
			table.print(false, true);
		}
	}

	let pdfExServerActive = false;

	/**
	 * Export to pdfExServer
	 * @param url {string}
	 * @param columsTable {object}
	 * @param lang {string}
	 */
	function pdfExServerSv(url, columsTable, lang) {
		if (typeof table === 'object' && table !== null) {
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
			const nazev =
				year + '-' + mouth + '-' + day + '--' + hour + '-' + minutes + '--analytika-cav';
			const data = {
				table: dataArlGraf1?.table,
				columns: dataArlGraf1?.columns,
				outData: outData,
				columsTable: columsTable
			};
			pdfExServerTable(url, data, nazev, lang).then((result) => {
				if (result) {
					setTimeout(() => {
						pdfExServerActive = false;
					}, 150);
				}
			});
		}
	}
</script>
{#if viewData}
	<ul class="lsc-cav-export c-cav-export--toolt01">
		<li>
			<button
				type="button"
				on:click|preventDefault={() =>
					downloadExcel()}
			>
				<img
					src={ImgExcel}
					alt={t('header.img.logo', $language)}
					width="24"
					height="24"
					loading="lazy"
				/>
			</button>
			<p class="bem-tool">{t('tabulator.toolt_excel', $language, 'u')}</p>
		</li>
		<li>
			<button
				type="button"
				on:click|preventDefault={() =>
					pdfExServerSv(settings.pdf_ex_tab, objTableData.getColumnsRaw(), $language)}
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
			<p class="bem-tool bem-tool2">{t('tabulator.toolt_pdf', $language, 'u')}</p>
		</li>
		<li>
			<button type="button" on:click|preventDefault={() => print()}>
				<img
					src={ImgPrint}
					alt={t('header.img.logo', $language)}
					width="24"
					height="24"
					loading="lazy"
				/>
			</button>
			<p class="bem-tool bem-tool3">{t('tabulator.toolt_tisk', $language, 'u')}</p>
		</li>
	</ul>
	<div class="c-cav-grid-width-set2">
		<div class="c-cav-grid">
			{#if message}
				<div class="c-cav-grid-message">
					{message}
				</div>
			{/if}
			<div
				class={message === '' ? 'no-display-78 c-cav-grid__table_' + id : 'c-cav-grid__table_' + id}
			></div>
		</div>
	</div>
{/if}
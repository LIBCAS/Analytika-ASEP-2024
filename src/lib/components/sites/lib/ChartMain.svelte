<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';

	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataChart.js').ArlDataChart} ArlDataChart */
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ChartDepartment.js').ChartDepartment} ChartDepartment */

	/** @type {?ArlDataChart} */
	export let dataArlGraf1 = null;

	/** @type {?Object<string,Object>} */
	export let outData = {};

	/** @type {String} */
	export let nameGraf1 = '';

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?String}*/
	export let chartType = null;

	/** @type {?String|Number}*/
	export let id = '0';
	id = id ? id.toString() : '0';

	// export let confGraf1 = "";
	export let nadpisForm = '';
	export let relativeVals = false;

	// stores
	import { language } from '$lib/stores/language';

	// utils
	import { imageGenerator } from '$lib/utils/chart/imageGenerator.js';
	import { CavChartBase } from '$lib/utils/chart/CavChartBase.js';
	import { CavChartDepartment } from '$lib/utils/chart/CavChartDepartment.js';
	import { Text as TextServis } from '$lib/services/Text.js';
	const textService = new TextServis();

	/** @type {ArlDataChart}*/
	let data = {};
	let osaX = '';
	let osaY = '';
	let viewGraf = false;

	/**
	 * Call export image from Chart
	 * @param {String} id
	 * @param {String} idT
	 * @param {String} nazev
	 */
	function imageGeneratorCall(id, idT, nazev) {
		imageGenerator(id, idT, nazev, texts, $language);
	}

	onMount(() => {
		if (dataArlGraf1) {
			data.columns = dataArlGraf1.columns;
			data.table = dataArlGraf1.table;
			data.osaX = dataArlGraf1.osaX;
			data.osaY = dataArlGraf1.osaY;
		}

		/** @type {?ChartDepartment} */
		let objGraf = null;
		if (chartType == 'prehled_oddeleni' && outData) {
			objGraf = new CavChartDepartment(data, outData, texts['oddeleni'], texts['pocet_zaznamu']);
		} else if (outData) {
			objGraf = new CavChartBase(data, outData);
		}

		let idText = 'my-chart-ls-' + id;
		if (relativeVals) {
			objGraf.init(true);
			idText = 'my-chart-ls-' + id + '-relat';
		} else {
			objGraf.init(false);
		}

		if (typeof data !== 'undefined' && typeof data.table !== 'undefined' && data.table.length > 0) {
			viewGraf = true;
		}

		/** @type {HTMLCanvasElement | null} */
		const domChart = /** @type {HTMLCanvasElement | null} */ (document.getElementById(idText));
		const ctx = domChart?.getContext('2d');
		Chart.register(ChartDataLabels);
		osaX = objGraf.osaX;
		osaY = objGraf.osaY;
		if (relativeVals) {
			osaY += ' [%]';
		}
		if (ctx) {
			// configuration chart.js for relative values
			if (relativeVals) {
				const chart = new Chart(ctx, {
					type: 'bar',
					// animations: false,
					data: {
						labels: objGraf.labelsId,
						datasets: objGraf.datasets
						// labels: labelSource,
						// datasets: datasetSource
					},
					options: {
						layout: {
							padding: {
								top: 50,
								right: 50
							}
						},
						resizeDelay: 100,
						maintainAspectRatio: true,
						responsive: true,
						scales: {
							y: {
								beginAtZero: true,
								max: 100,
								title: {
									display: true,
									text: osaY
								}
							},
							x: {
								stacked: true,
								beginAtZero: true,
								title: {
									display: true,
									text: osaX
								}
							}
						},
						plugins: {
							legend: {
								// padding: 150,
								display: true,
								position: 'bottom',
								align: 'center',
								title: {
									display: true,
									text: ''
								}
							},
							tooltip: {
								//mode: 'index',
								position: 'average'
							},
							datalabels: {
								align: 'top',
								anchor: 'end',
								// offset: 5,

								/**
								 * formater - total values
								 * @param {Number|String} value
								 * @param {Object<string, any>} context
								 */
								formatter: function (value, context) {
									// suma
									let sum = 0;
									context.chart.data.datasets.forEach(
										/**
										 * @param {Object<string, any>} dataset
										 * @param {Number} i
										 */
										(dataset, i) => {
											if (context.chart.isDatasetVisible(i)) {
												sum += parseInt(dataset.data[context.dataIndex]);
											}
										}
									);
									let visibleDatasetsAfterCurrent = 0;
									if (value == 0) {
										visibleDatasetsAfterCurrent++;
									}
									if (visibleDatasetsAfterCurrent == 0) {
										for (
											let i = context.datasetIndex + 1;
											i < context.chart.data.datasets.length;
											i++
										) {
											if (!context.chart.getDatasetMeta(i).hidden) {
												if (context.chart.data.datasets[i].data[context.dataIndex] > 0) {
													visibleDatasetsAfterCurrent++;
												}
											}
										}
									}

									if (visibleDatasetsAfterCurrent === 0) {
										return null;
									} else {
										return null;
									}
								},
								color: '#444'
							}
						}
					}
				});
				chart.options.devicePixelRatio = 2;
			} else {
				const chart = new Chart(ctx, {
					type: 'bar',
					data: {
						labels: objGraf.labelsId,
						datasets: objGraf?.datasets || []
					},
					options: {
						layout: {
							padding: {
								top: 50,
								right: 50
							}
						},
						resizeDelay: 100,
						maintainAspectRatio: true,
						responsive: true,
						scales: {
							y: {
								beginAtZero: true,
								title: {
									display: true,
									text: osaY
								}
							},
							x: {
								stacked: true,
								beginAtZero: true,
								title: {
									display: true,
									text: osaX
								}
							}
						},
						plugins: {
							legend: {
								// padding: 50,
								display: true,
								position: 'bottom',
								align: 'center',
								title: {
									display: true,
									text: ''
								}
							},
							tooltip: {
								//mode: 'index',
								position: 'average'
							},
							datalabels: {
								align: 'top',
								anchor: 'end',
								// formatter - total values
								formatter: function (value, context) {
									// suma
									let sum = 0;
									context.chart.data.datasets.forEach((dataset, i) => {
										if (context.chart.isDatasetVisible(i)) {
											let valActLabel = dataset.data[context.dataIndex];
											valActLabel = Number(valActLabel);
											sum += valActLabel;
										}
									});

									let visibleDatasetsAfterCurrent = 0;
									if (value == 0) {
										visibleDatasetsAfterCurrent++;
									}

									if (visibleDatasetsAfterCurrent == 0) {
										for (
											let i = context.datasetIndex + 1;
											i < context.chart.data.datasets.length;
											i++
										) {
											if (!context.chart.getDatasetMeta(i).hidden) {
												let valActVisible =
													context?.chart?.data?.datasets[i].data[context.dataIndex] || 0;
												valActVisible = Number(valActVisible);
												if (valActVisible > 0) {
													visibleDatasetsAfterCurrent++;
												}
											}
										}
									}

									if (visibleDatasetsAfterCurrent === 0) {
										return sum;
									} else {
										return null;
									}
								},
								color: '#444'
							}
						}
					}
				});
				chart.options.devicePixelRatio = 2;
			}
		}
	});
</script>

<div
	class={!viewGraf ? 'no-display c-cav-graf' : 'c-cav-graf'}
	id={relativeVals ? 'my-chart-ls-' + id + '-rodic-relat' : 'my-chart-ls-' + id + '-rodic'}
>
	<h3>{nameGraf1}</h3>
	{#if relativeVals}
		<canvas id="my-chart-ls-{id}-relat"></canvas>
		<div id="my-chart-ls-{id}-time-relat"></div>
	{:else}
		<canvas id="my-chart-ls-{id}"></canvas>
		<div id="my-chart-ls-{id}-time"></div>
	{/if}
</div>
<div class="c-cav-grid__table-downloads">
	<ul class="inline export-icons">
		<li class="lsc-form-buttom lsc-form-buttom--small">
			{#if relativeVals}
				<button
					type="button"
					on:click|preventDefault={() =>
						imageGeneratorCall(
							'my-chart-ls-' + id + '-rodic-relat',
							'my-chart-ls-' + id + '-time-relat',
							textService.genUrlFromString(nadpisForm)
						)}>{texts['ulozit_graf']}</button
				>
			{:else}
				<button
					type="button"
					on:click|preventDefault={() =>
						imageGeneratorCall(
							'my-chart-ls-' + id + '-rodic',
							'my-chart-ls-' + id + '-time',
							textService.genUrlFromString(nadpisForm)
						)}>{texts['ulozit_graf']}</button
				>
			{/if}
		</li>
	</ul>
</div>

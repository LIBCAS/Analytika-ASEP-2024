<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @type {Object<string, any>} */
	export let dataSend = {};

	/** @type {?Object<string,any>} */
	export let outData = null;

	/** @type {null|?Object<string,any>} */
	export let outData200 = null;

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?String} */
	export let chartType = '';

	/** @type {String} */
	export let nadpisForm = '';

	/** @type {String} */
	export let nameGraf1 = '';

	/** @type {?Object<string,any>} */
	let dataArlGraf1 = null;
	let formFail = '';

	// stores
	import { shortcuts } from '$lib/stores/shortcuts';

	// settings
	import settings from '$lib/settings';

	// utils
	import { s } from '$lib/utils/serverUrl';
	import { formCharts } from '$lib/utils/jssender/formCharts.js';
	import { FormUtils } from '$lib/utils/jsloader/Forms/FormUtils.js';

	// components
	import Loader from '$lib/components/sites/lib/Loader.svelte';
	import ChartMain from '$lib/components/sites/lib/ChartMain.svelte';
	import TabulatorMain1 from '$lib/components/sites/lib/TabulatorMain1.svelte';

	/** @type {FormUtils} */
	const formUtils = new FormUtils();

	/** @type {?Object<string,string|number|null>} */
	let confGraf1 = null;
	let viewGraf1 = false;
	let viewGraf1Mode = 'GRAF';

	/** @type {Boolean} */
	let showGrid = false;

	/** @type {Boolean} */
	let loading = true;
	let omezeno = false;

	onMount(() => {
		loading = true;
		dispatch('setLoader', { loading });

		if (typeof dataSend.conf !== 'undefined') {
			/**
			 * Get detail information about chart
			 * @type {Array<?Object<String,String|Object<string,String>>>}
			 * */
			const chartInfo = formUtils.chartDetail(outData200);
			if (typeof chartInfo[0] !== 'undefined') {
				nameGraf1 = chartInfo[0].title;
				confGraf1 = chartInfo[0].conf;
				if (
					confGraf1 &&
					typeof confGraf1.zobrazeni !== 'undefined' &&
					(confGraf1.zobrazeni === 'vysledky' || confGraf1.zobrazeni === 'VYSLEDKY')
				) {
					viewGraf1Mode = 'VYSLEDKY';
				}
			}

			let outDataArlCharts = null;
			try {
				outDataArlCharts = formCharts(s('server.formsSend'), dataSend);
			} catch (err) {
				// ignore intentionally
				void err;
			}
			if (outDataArlCharts) {
				outDataArlCharts.then((dataValGraf1) => {
					viewGraf1 = true;
					loading = false;
					dispatch('setLoader', { loading });
					showGrid = true;
					if (
						dataValGraf1 &&
						dataValGraf1 !== null &&
						typeof dataValGraf1 === 'object' &&
						typeof dataValGraf1?.rows !== 'undefined' &&
						dataValGraf1.rows > 0
					) {
						dataArlGraf1 = dataValGraf1;
					} else if (
						dataValGraf1 &&
						dataValGraf1 !== null &&
						typeof dataValGraf1 === 'object' &&
						typeof dataValGraf1?.rows !== 'undefined' &&
						dataValGraf1.rows <= 0
					) {
						formFail = texts['neodpovida_zaznam'];
					} else if (dataValGraf1 === settings.errorAuthCode) {
						omezeno = true;
					} else {
						formFail = texts['chyba'];
					}
					if ($shortcuts.autor) {
						dispatch('setArlDataGr', {
							arlData: dataValGraf1
						});
					}
				});
			}
		}
	});
</script>
{#if omezeno}
	<div id="vysledek-vyhledavani-c" class="c-loader">
		<div class="c-message-error"><div>{texts['ip_adresy']}.</div></div>
	</div>
{:else if loading}
	<div id="vysledek-vyhledavani-c" class="c-loader">
		<Loader />
	</div>
{:else if formFail}
	<div id="vysledek-vyhledavani-c">
		<div class="mt-1"><em>{formFail}.</em></div>
	</div>
{:else}
	<div id="vysledek-vyhledavani-c">
		{#if viewGraf1}
			{#if dataArlGraf1 && viewGraf1Mode == 'VYSLEDKY'}
				<TabulatorMain1 {nadpisForm} {dataArlGraf1} {outData} {chartType} {texts} />
			{:else if dataArlGraf1}
				{#if showGrid}
					<TabulatorMain1 {nadpisForm} {dataArlGraf1} {outData} {chartType} {texts} />
				{/if}
				<ChartMain {nadpisForm} {nameGraf1} {dataArlGraf1} {outData} {chartType} {texts} id="0" relativeVals={false} />
				<ChartMain {nadpisForm} {nameGraf1} {dataArlGraf1} {outData} {chartType} {texts} id="0" relativeVals={true} />
			{/if}
		{/if}
	</div>
{/if}



<script>
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataTrideni.js').ArlDataTrideni} ArlDataTrideni */

	/** @type ArlDataTrideni|null */
	export let dataTrideni = null;

	/** @type ArlDataTrideni|null */
	export let dataZf = null;

	/** @type {?Object<string,string>} */
	export let texts = null;

	export let isFulltext = false;
	export let sortFulltext = '';

	/** @type {?Function} */
	export let handleSubmit;

	// default values
	if (dataTrideni && typeof dataTrideni.name == 'undefined') {
		dataTrideni.name = '';
	}
	if (dataTrideni && typeof dataTrideni.data == 'undefined') {
		dataTrideni.data = [];
	}
	if (!dataZf || dataZf == null) {
		dataZf = {
			name: '',
			data: []
		};
	}
	if (!dataTrideni || dataZf == null) {
		dataTrideni = {
			name: '',
			data: []
		};
	}

	if (dataZf && typeof dataZf.name == 'undefined') {
		dataZf.name = '';
	}
	if (dataZf && typeof dataZf.data == 'undefined') {
		dataZf.data = [];
	}

	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';
	let zf = $searchStatisticGen[dataZf.name] || '';
	if (isFulltext && sortFulltext) {
		zf = sortFulltext;
	} else if (isFulltext) {
		zf = 'TF_SF_ANAL_SHORT';
	}

	let trideni = $searchStatisticGen[dataTrideni.name];
	function aktualizovat() {
		if (dataZf && dataZf.name) {
			$searchStatisticGen[dataZf.name] = zf;
		}
		if (dataTrideni && dataTrideni.name) {
			$searchStatisticGen[dataTrideni.name] = trideni;
		}
		if (isFulltext && handleSubmit)  {
			handleSubmit(zf);
		} else if (handleSubmit) {
			handleSubmit('');
		}
	}
</script>
<div class="c-vysledky1-trideni">
	{#if dataTrideni.data && dataTrideni.data.length > 0}
		<div class="c-vysledky1-trideni__select lsc-form-select lsc-form-select--sm">
			<select
				name={dataTrideni.name}
				id={dataTrideni.name}
				bind:value={trideni}
				on:change={aktualizovat}
			>
				{#if dataTrideni.data}
					{#each dataTrideni.data as druhItem, i (i)}
						{#if druhItem}
							<option value={druhItem[0]}>{druhItem[1]}</option>
						{/if}
					{/each}
				{/if}
			</select>
		</div>
	{/if}
	{#if dataZf && dataZf.data && dataZf.data.length > 0 && dataZf.name}
		<div class="c-vysledky1-trideni__select lsc-form-select lsc-form-select--sm">
			<select
				name={dataZf.name.toString()}
				id={dataZf.name.toString()}
				bind:value={zf}
				on:change={aktualizovat}
			>
				{#if dataZf.data}
					{#each dataZf.data as druhItem, i (i)}
						{#if druhItem}
							<option value={druhItem[0]}>{druhItem[1]}</option>
						{/if}
					{/each}
				{/if}
			</select>
		</div>
	{/if}
</div>

<script>
	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;
	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';
	if (dataItem && 
	typeof dataItem[3] !== 'undefined' && 
	dataItem[3] !== null && 
	!$searchStatisticGen[dataItem[0]]
	) {
		$searchStatisticGen[dataItem[0]] = '';
	}

	/** @type {Number} */
	let selected = 0;
	let nadpis = dataItem && dataItem[1] ? dataItem[1].toString() : texts['nadpis_null'];
	let name = dataItem && dataItem[0] ? dataItem[0].toString() : '';

	let visibleCom = false;
	if (dataItem && Array.isArray(dataItem[3]) && dataItem[3].length) {
		visibleCom = true;
	}

	if (
		dataItem &&
		$searchStatisticGen[dataItem[0]] !== undefined &&
		$searchStatisticGen[dataItem[0]].length > 0
	) {
		for (let key in dataItem[3]) {
			let value = dataItem[3][key][0];
			if ($searchStatisticGen[dataItem[0]].includes(value)) {
				selected = Number(key);
			}
		}
	}
	if (
		dataItem &&
		typeof dataItem[3] !== 'undefined' &&
		dataItem[3] !== null &&
		Array.isArray(dataItem[3]) &&
		dataItem[3].length &&
		typeof dataItem[3][selected] !== 'undefined' &&
		dataItem[3][selected][0] !== undefined
	) {
		$searchStatisticGen[dataItem[0]] = dataItem[3][selected][0];
	}
</script>

<div class="l-form-gen-item1">
	{#if visibleCom}
		<h4>{nadpis}</h4>
		<div class="lsc-form__item--format lsc-form-select">
			<select {name} id={name} bind:value={$searchStatisticGen[name]}>
				{#if dataItem && dataItem[3]}
					{#each dataItem[3] as druhItem, i (i)}
						<option value={druhItem[0]}>{druhItem[1]}</option>
					{/each}
				{/if}
			</select>
		</div>
	{/if}
</div>






<script>
	/** @type {Object<string,string>} */
	export const texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;

	/** @type {?String} */
	export let idUstavDetail = null;	

	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';

	let seachVal = '1';
	if (idUstavDetail && dataItem && dataItem['8'] && dataItem['8']=='@AKTUALNI_USTAV') {
		seachVal = idUstavDetail
	}

	let isChecked = false;
	let key1 = null;
	if (dataItem && dataItem[0]) {
		key1 = dataItem[0];
		isChecked = $searchStatisticGen[key1] === seachVal ? true : false;
	}
	$: {
		if (key1) {
			$searchStatisticGen[key1] = isChecked ? seachVal : '';
		}
	}
	let val1 = null;
	if (dataItem && dataItem[1]) {
		val1 = dataItem[1];
	}
</script>
{#if key1}
<div class="l-form-gen-item1">
	<h4>{val1}</h4>
	<div class="lsc-form-checkbox lsc-form-checkbox--one">
		<label
			><input type="checkbox" name={key1} value={seachVal} bind:checked={isChecked} /><span
				>{val1}</span
			>
		</label>
	</div>
</div>
{/if}

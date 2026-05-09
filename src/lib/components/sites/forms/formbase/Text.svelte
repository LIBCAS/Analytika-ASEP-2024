<script>
	/** @type {Object<string,string>} */
	export const texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;

	// utils
	import { formsCheckModifikator } from "$lib/utils/jstranform/formsCheckModifikator.js";

	let nadpis = '';
	let placeholder = ''

	if (typeof dataItem?.[10] !== "undefined" && !formsCheckModifikator(dataItem[10], 'zobrazeni','BEZ_POPISU')) {
		nadpis = dataItem[1];
		placeholder = '';
	} else {
		nadpis = '';
		placeholder = dataItem?.[1] || '';
	}

	// stores
	import { searchStatisticGen } from "$lib/stores/searchStatisticGen";
</script>
{#if (dataItem?.[0])}
<div class="l-form-gen-item1">
	<h4>{nadpis}</h4>
	<div class="lsc-form__item--format lsc-form-text">
		<input
			type="text"
			placeholder={placeholder}
			name={dataItem?.[0]}
			bind:value={$searchStatisticGen[dataItem[0]]}
		/>
	</div>
</div>
{/if}
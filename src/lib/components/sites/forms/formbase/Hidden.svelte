<script>
	/** @type {Object<string,string>} */
	export const texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;

	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';
</script>

{#if (dataItem?.[0])}
<div class="l-form-gen-item1">
	<input type="hidden" name={dataItem[0]} value={$searchStatisticGen[dataItem[0]]} />
</div>
{/if}

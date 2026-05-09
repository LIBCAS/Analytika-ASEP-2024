<script>
	import { onMount } from 'svelte';

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;

	export let conf = '';

	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen.js';
	import { selectedMaster } from '$lib/stores/selectedMaster.js';

	/** @type {Number} */
	let selected = 0;

	// import { devel } from '$lib/stores/devel';
	let nadpis = dataItem && dataItem[1] ? dataItem[1].toString() : '';
	let name = dataItem && dataItem[0] ? dataItem[0].toString() : '';
	let visibleCom = false;

	/**
	 * Set selectedMaster storage
	 */
	function handleSelectedMaster() {
		if (conf === 'PO02') {
			const id = $searchStatisticGen[name];
			const objSeltected = {
				conf: conf.toString(),
				value: id.toString(),
				disabled: false
			};
			if (id === 'projoth' || id === 'projcz') {
				objSeltected['disabled'] = true;
			}
			selectedMaster.set(objSeltected);
		}
	}

	onMount(() => {
		$selectedMaster = {};

		// set visiblity component
		if (dataItem && Array.isArray(dataItem[3]) && dataItem[3].length) {
			visibleCom = true;
		}

		// selected item
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

		// save selected item
		if (
			dataItem &&
			dataItem[0] &&
			typeof dataItem[3] !== 'undefined' &&
			dataItem[3] !== null &&
			typeof dataItem[3][selected] !== 'undefined' &&
			dataItem[3][selected][0] !== undefined
		) {
			$searchStatisticGen[dataItem[0]] = dataItem[3][selected][0];
		}
	});
</script>

<div class="l-form-gen-item1">
	<h4>{nadpis}</h4>
	{#if visibleCom}
		<div class="lsc-form__item--format lsc-form-select">
			<select
				{name}
				id={name}
				bind:value={$searchStatisticGen[name]}
				on:change={handleSelectedMaster}
			>
				{#if dataItem && dataItem[3]}
					{#each dataItem[3] as druhItem, i (i)}
						<option value={druhItem[0]}>{druhItem[1]}</option>
					{/each}
				{/if}
			</select>
		</div>
	{/if}

</div>

<script>
	import { onMount } from 'svelte';

	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;

	/** @type {?Object<string,any>} */
	export let formDataAll = null;

	/**
	 * Deselect all checkboxes
	 * @param id {string}
	 */
	function selectNoneItem(id) {
		if (typeof $searchStatisticGen[id] !== 'undefined') {
			$searchStatisticGen[id] = [];
		}
		getVypis();
	}

	/**
	 * Deselect checkbox by button
	 * @param id {string}
	 * @param value {any}
	 */
	function deSelectIdItem(id, value) {
		value = String(value);
		if (typeof $searchStatisticGen[id] !== 'undefined' && Array.isArray($searchStatisticGen[id])) {
			if ($searchStatisticGen[id].includes(value)) {
				$searchStatisticGen[id] = $searchStatisticGen[id].filter((t) => t != value);
			}
		}
	}

	/**
	 * Actualize array with selected checkboxes
	 */
	function getVypis() {
		vybrano = [];
		let objItem;

		for (let key in itemArr) {
			objItem = itemArr[key];
			let key1 = '';
			if (dataItem &&
				dataItem[0]) {
				key1 = dataItem[0].toString();
			}

			if (dataItem &&
				typeof objItem === 'object' &&
				objItem[0] &&
				typeof objItem[0] === 'string' &&
				$searchStatisticGen[key1].includes(objItem[0])
			) {
				vybrano.push(objItem);
			}
		}
	}

	/**
	 * Service buttoms select all, select none
	 * @param id {string} id checkbox group
	 */
	function selectAllItem(id) {
		if (typeof formDataAll !== 'undefined' && formDataAll) {
			if (
				typeof $searchStatisticGen[id] !== 'undefined' &&
				typeof formDataAll[id] !== 'undefined' &&
				formDataAll[id]
			) {
				$searchStatisticGen[id] = formDataAll[id];
			}
		}
		getVypis();
	}

	// view, hide checkboxes
	let visible = false;
	function toggleSection() {
		visible = !visible;
	}
	let uzky8 = false;
	if (
		dataItem &&
		typeof dataItem[0] !== 'undefined' &&
		(dataItem[0] === 'rokVydani' || dataItem[0] === 'ROK_VYDANI' || dataItem[0] === 'export')
	) {
		uzky8 = true;
	}

	/**
	 * list of select
	 * @type {Array<{[key: string]: string|number|boolean|null}>}
	 * */
	let vybrano = [];

	if (dataItem && dataItem[11]) {
		dataItem[3].unshift(dataItem[11]);
	}

	/** @type {Array<{[key: string]: string|number|boolean|null}>} */
	let itemArr = [];
	if (dataItem && Array.isArray(dataItem[3])) {
		itemArr = dataItem[3];
	}

	// Special view for component with id "druhDokumentu" - visible default
	if (
		dataItem &&
		(itemArr.length > 3 || typeof dataItem[0] === 'undefined') &&
		dataItem[0] !== 'druhDokumentu'
	) {
		visible = false;
	}

	// update values - reactive (aktualizace vypisu hodnot - reakt.)
	$: if (
		dataItem &&
		typeof $searchStatisticGen[dataItem[0]] !== 'undefined' &&
		Array.isArray($searchStatisticGen[dataItem[0]])
	) {
		getVypis();
	}

	onMount(() => {
		// actualize selected
		getVypis();

		// set select all by setting "vybrat_vse"
		if (
			dataItem &&
			typeof dataItem[10] !== 'undefined' &&
			typeof dataItem[10]['vybrat_vse'] !== 'undefined' &&
			dataItem[10]['vybrat_vse'] === '1'
		) {
			selectAllItem(dataItem[0]);
			visible = false;
		} else if (dataItem && dataItem[0] === 'rokVydani') {
			visible = false;
		} else {
			visible = true;
		}
	});
</script>

<div class="mt-0 mb-0">
	<div class="l-form-gen-item1 mt-0 c-form-multiselect">
		{#if itemArr.length > 3}
			<button class="btn" on:click|preventDefault={() => toggleSection()}>
				<div class="arrow">
					<svg viewBox="0 0 24 24" class="icon">
						{#if visible}
							<path d="M7 14l5-5 5 5z" />
						{:else}
							<path d="M7 10l5 5 5-5z" />
						{/if}
					</svg>
					{#if dataItem && dataItem[1]}
						<div class="h4">{dataItem[1]}</div>
						<!-- <h4>{dataItem[1]}</h4> -->
					{/if}
				</div>
			</button>
		{:else}
			<button class="btn btn--cursor-kl" on:click|preventDefault>
				<div class="arrow">
					{#if dataItem && dataItem[1]}
						<div class="h4">{dataItem[1]}</div>
					{/if}
				</div>
			</button>
		{/if}
		{#if vybrano && dataItem && itemArr.length > 3}
			<div class="lsc-form-vybrano mt-0">
				{#each vybrano as item, i(i)}
					<div class="lsc-form-buttom lsc-form-buttom--small lsc-form-buttom--delete mt-0 mb-1">
						<button on:click|preventDefault={() => deSelectIdItem(dataItem[0], item[0])}
							>{item[1]}</button
						>&nbsp;
					</div>
				{/each}
			</div>
		{/if}
		{#if dataItem && dataItem[3] && itemArr && visible}
			<div
				class="lsc-form-checkbox {uzky8
					? 'lsc-form-checkbox--8'
					: ''} lsc-form-checkbox--auto-height-no"
			>
				{#each itemArr as druhItem, i(i)}
					<label
						><input
							type="checkbox"
							name="{dataItem[0]}-{druhItem[0]}"
							value={druhItem[0]}
							bind:group={$searchStatisticGen[dataItem[0]]}
						/>
						<span>{druhItem[1]}</span>
					</label>
				{/each}
			</div>
			{#if itemArr.length > 3}
				<div class="lsc-form-buttom lsc-form-buttom--small">
					<button on:click|preventDefault={() => selectAllItem(dataItem[0])}>
						{texts['vybrat_vse']}
					</button>
					<button on:click|preventDefault={() => selectNoneItem(dataItem[0])}>
						{texts['zrusit_vse']}
					</button>
					{texts['vybrano']}&nbsp;({$searchStatisticGen[dataItem[0]].length})
				</div>
			{/if}
		{/if}
	</div>
</div>
<script>
	import { onMount } from 'svelte';

	/** @type {Object<string,string>} */
	export let texts = {};

	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlFormItem').ArlFormItem01} ArlFormItem01 */
	/** @type {ArlFormItem01}*/
	export let dataItem = {};

	/** @type {Number} */
	let selected = 0;
	let visibleCom = false;
	if (dataItem && Array.isArray(dataItem[3]) && dataItem[3].length) {
		visibleCom = true;
	}
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';

	let dropdownVisible = false;
	let searchQuery = '';

	/** @type{String} */
	let selectedValue = '';

	/**
	 * @typedef {Object} VybranoType
	 * @property {?string} label
	 * @property {?string} id
	 */
	/** @type {VybranoType | false} */

	/** @type {?Object<string, ?string>} */
	let vybrano = null;

	const header = dataItem[1] || '';

	/** @type {Array<Object<string, ?string>>} */
	let itemArr = [];
	if (dataItem && Array.isArray(dataItem[3])) {
		for (let key in dataItem[3]) {
			/** @type {Object<string, ?string>} */
			let objItem = {};
			if (dataItem[3] && dataItem[3][key]) {
				objItem.value = dataItem[3][key][0];
				objItem.label = dataItem[3][key][1];
				itemArr.push(objItem);
				if (
					dataItem[0] &&
					$searchStatisticGen[dataItem[0]].includes(objItem.value) &&
					objItem.value !== ''
				) {
					selected = Number(key);
				}
			}
		}
	}

	// Fuction for actuallize values
	function getVypis() {
		vybrano = null;

		/** @type {?Object<string, ?string>} */
		let objItem;
		for (let key in itemArr) {
			objItem = itemArr[key];
			if (
				dataItem[0] &&
				typeof $searchStatisticGen[dataItem[0]] !== 'undefined' &&
				$searchStatisticGen[dataItem[0]] !== null &&
				$searchStatisticGen[dataItem[0]] === objItem.value &&
				objItem.value
			) {
				vybrano = objItem;
			}
		}
	}

	/**
	 * Deselect checkbox
	 * @param id {string}
	 */
	function deSelectIdItem(id) {
		if (typeof $searchStatisticGen[id] !== 'undefined') {
			$searchStatisticGen[id] = '';
		}
		getVypis();
	}

	/**
	 * toogle dropdown
	 */
	const toggleDropdown = () => {
		getVypis();
		dropdownVisible = !dropdownVisible;
	};

	$: filterItems = itemArr.filter((item) =>
		(item.label || '').toUpperCase().includes(searchQuery.toUpperCase())
	);

	/**
	 * Select value
	 * @param objSelected {Object<string, ?string>}
	 */
	const selectItem = (objSelected) => {
		selected = Number(objSelected.value);
		dropdownVisible = false;
		if (dataItem[0] && typeof dataItem[3] !== 'undefined' && dataItem[3] !== null) {
			const filterData = dataItem[3].filter((obj) => {
				if (obj && obj[0] === selected.toString()) {
					return true;
				}
				return false;
			});
			$searchStatisticGen[dataItem[0]] = selectedValue = filterData?.[0]?.[0] || '';
			const outObj = dataItem[3].filter((obj) => {
				if (obj && obj[0] === selected.toString()) {
					return true;
				}
				return false;
			});
			if (typeof outObj[0] !== 'undefined' && typeof outObj?.[0]?.[0] !== 'undefined') {
				$searchStatisticGen[dataItem[0]] = outObj?.[0]?.[0] || '';
			}
		}
		getVypis();
	};

	// default base value
	if (
		dataItem[0] &&
		typeof dataItem[3] !== 'undefined' &&
		dataItem[3] !== null &&
		typeof dataItem[3][selected] !== 'undefined' &&
		dataItem[3][selected] !== null
	) {
		$searchStatisticGen[dataItem[0]] = selectedValue = dataItem?.[3]?.[selected]?.[0] || '';
	}
	onMount(() => {
		getVypis();
	});
</script>

<div class="l-form-gen-item1">
	<h4>{dataItem[1]}</h4>
	{#if vybrano && vybrano.label && dataItem[0]}
		<div class="lsc-form-vybrano mt-0">
			<div class="lsc-form-buttom lsc-form-buttom--small lsc-form-buttom--delete mt-0 mb-1">
				<button type="button" on:click|preventDefault={() => deSelectIdItem((dataItem?.[0] ||''))}
					>{vybrano.label}</button
				>&nbsp;
			</div>
		</div>
	{/if}
	{#if visibleCom}
		<div class="dropdown">
			<div class="lsc-form-buttom lsc-form-buttom--small lsc-form-buttom--dropdown">
				<button on:click|preventDefault={toggleDropdown} class="dropbtn"
					>{texts['zvolit']}: <strong>{header}</strong></button
				>
			</div>
			{#if dropdownVisible}
				<div class="lsc-dropdown-content">
					<input
						type="text"
						placeholder={texts['vyhledat']}
						id="searchInput"
						bind:value={searchQuery}
					/>
					<div class="lsc-dropdown-content__seznam">
						<ul>
							{#each filterItems as item, i (i)}
								<li
									class={typeof vybrano === 'object' && vybrano && vybrano.value === item.value
										? 'active-dropdown'
										: ''}
								>
									<a href="/#" on:click|preventDefault={() => selectItem(item)}>
										{#if item.value === ''}
											-- {texts['zrusit_vyber']} --
										{:else}
											{item.label}
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
			<input type="hidden" id="selectedValue" name="selectedValue" bind:value={selectedValue} />
		</div>
	{/if}
</div>




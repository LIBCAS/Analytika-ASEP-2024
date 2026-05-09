<script>
	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {?Object<string,any>} */
	export let dataItem = null;

	// stores
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';

	/** @type {boolean} */
	let visibleCom = false;
	if (dataItem && Array.isArray(dataItem[3]) && dataItem[3].length) {
		visibleCom = true;
	}

	/** @type {boolean} */
	let visibleAll = false;
	if (
		dataItem &&
		typeof dataItem[10] === 'object' &&
		dataItem[10]['radio_vse'] &&
		dataItem[10]['radio_vse'] === '1'
	) {
		visibleAll = true;
	}

	/** @type {boolean} */
	let uzky8 = false;
	if (
		dataItem &&
		typeof dataItem[10] === 'object' &&
		dataItem[10]['sloupce'] &&
		dataItem[10]['sloupce'] === 'uzke'
	) {
		uzky8 = true;
	}

	/** @type {Array<any>} */
	let itemArr = [];
	if (dataItem && Array.isArray(dataItem[3])) {
		itemArr = dataItem[3];
	}
	if (
		dataItem &&
		Array.isArray(dataItem[3]) &&
		dataItem[3].length &&
		dataItem[3] &&
		typeof dataItem[3] === 'object' &&
		visibleAll
	) {
		$searchStatisticGen[dataItem[0]] = '';
	}

	/** @type {number} */
	let selected = 0;
	if (visibleAll) {
		selected = -1;
	}
	if (
		dataItem &&
		Array.isArray(dataItem[3]) &&
		dataItem[3].length &&
		dataItem[3] &&
		typeof dataItem[3] === 'object' &&
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
		typeof dataItem[3][selected] !== 'undefined' &&
		dataItem[3][selected][0] !== undefined
	) {
		if (selected !== null && selected >= 0) {
			$searchStatisticGen[dataItem[0]] = dataItem[3][selected][0];
		}
	}
</script>

{#if dataItem}
	<div class="l-form-gen-item1">
		<h4>{dataItem[1] || ''}</h4>
		{#if visibleCom}
			<div
				class="lsc-form-radio
			{uzky8 ? 'lsc-form-radio--8' : ''}
			lsc-form-radio--auto-height-no
			"
			>
				{#if visibleAll}
					<label
						><input
							type="radio"
							name={dataItem[0]}
							value=""
							bind:group={$searchStatisticGen[dataItem[0]]}
						/>
						<span>{texts['vse']}</span>
					</label>
				{/if}
				{#each itemArr as druhItem, i (i)}
					<label
						><input
							type="radio"
							name={dataItem[0]}
							value={druhItem[0]}
							bind:group={$searchStatisticGen[dataItem[0]]}
						/>
						<span>{druhItem[1]}
							{#if (typeof druhItem[3] !== 'undefined' && druhItem[3])}
							<br />
							<em>{druhItem[3] || ''}</em>
							{/if}
						</span>
					</label>
				{/each}
			</div>
		{/if}
	</div>
{/if}





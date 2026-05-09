<script>
	import { onMount } from 'svelte';

	/** @type {?string} */
	export let idUstavDetail = null;

	/** @type {?Array<Object<string, string>>} */
	export let seznamOddeleni = null;

	/** @type {?string} */
	export let idOddeleni = null;

	// stores
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utilitis
	import { t } from '$lib/utils/translate';
	import { m } from '$lib/utils/menuUrl';

	// base settings
	import settings from '$lib/settings';
	let base = settings.domena;

	// texts
	/** @type {Object<string,string>} */
	let texts = {};
	texts['oddeleni'] = t('form.oddeleni.zvolit_oddeleni', $language);
	texts['oddeleni_aktivni'] = t('form.oddeleni.zvolit_oddeleni_aktivni', $language);
	texts['oddeleni_zruseno'] = t('form.oddeleni.zvolit_oddeleni_zruseno', $language);

	let selectedOddeleni = '';
	let disabledDepartement = false;
	if (seznamOddeleni) {
		for (const seznamOddeleniItem of seznamOddeleni) {
			if (seznamOddeleniItem.active === '1') {
				selectedOddeleni = seznamOddeleniItem.idOddeleni + '-' + seznamOddeleniItem.urlOddeleni;
				if (seznamOddeleniItem.zruseno) {
					disabledDepartement = true;
				}
			}
		}
	}

	function urlChangerDepartment() {
		if (selectedOddeleni) {
			let hash = window.location.hash || '';
			let urlN =
				base +
				'' +
				m('menu.zvolitUstav', $language) +
				'' +
				$shortcuts.ustav +
				'' +
				m('oddeleni.detail', $language) +
				'' +
				selectedOddeleni +
				hash;
			window.location.href = urlN;
		}
	}
	/** @type {Boolean} */
	let viewForm = false;
	onMount(() => {
		viewForm = true;
	});
</script>
{#if viewForm && seznamOddeleni}
	<form id="lsc-form-oddeleni" class="lsc-form-oddeleni mt-1 mb-1">
		{#if !disabledDepartement}
			<h4>{texts['oddeleni_aktivni']}</h4>
			<div class="lsc-form__item--format lsc-form-select">
				<select bind:value={selectedOddeleni} on:change={urlChangerDepartment}>
					{#each seznamOddeleni as seznamOddeleniItem, i (i)}
						{#if !seznamOddeleniItem.zruseno}
							<option value={seznamOddeleniItem.idOddeleni + '-' + seznamOddeleniItem.urlOddeleni}
								>{seznamOddeleniItem.nazevOddeleni}</option
							>
						{/if}
					{/each}
				</select>
			</div>
		{:else}
			<h4>{texts['oddeleni_zruseno']}</h4>
			<div class="lsc-form__item--format lsc-form-select">
				<select bind:value={selectedOddeleni} on:change={urlChangerDepartment}>
					{#each seznamOddeleni as seznamOddeleniItem, i (i)}
						{#if seznamOddeleniItem.zruseno}
							<option value={seznamOddeleniItem.idOddeleni + '-' + seznamOddeleniItem.urlOddeleni}
								>{seznamOddeleniItem.nazevOddeleni}</option
							>
						{/if}
					{/each}
				</select>
			</div>
		{/if}
	</form>
{/if}
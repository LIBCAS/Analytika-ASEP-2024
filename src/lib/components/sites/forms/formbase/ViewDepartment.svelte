<script>
	import { onMount } from 'svelte';

	/** @type {?Object<string, string>} */
	export let formData = null;

	/** @type {?Object<string,any>} */
	export let outData = null;

	/** @type {?Object<string,any>} */
	export let outData200 = null;

	/** @type {String} */
	export let listFormatSite = 'ol';

	/** @type {boolean} */
	let loading = true;

	// components
	import Loader from '$lib/components/sites/lib/Loader.svelte';

	// storage
	import { searchStatisticGen } from '$lib/stores/searchStatisticGen';
	import { section } from '$lib/stores/section';
	import { shortcuts } from '$lib/stores/shortcuts';
	import { language } from '$lib/stores/language';

	// utils
	import { sites } from '$lib/utils/jsloader/sites.js';
	import { t } from '$lib/utils/translate';
	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	let base = settings.domena;

	/** @type {?Promise <?Object.<number, string>[]>} */
	let objDataSite = null;

	/** @type {?Array<Object.<number, string>>} */
	let dataSite = null;

	onMount(() => {
		loading = true;
		if (
			$searchStatisticGen.conf === 'UT05' &&
			$section == 'ustav' &&
			formData &&
			outData &&
			outData200
		) {
			try {
				objDataSite = sites(
					$shortcuts.ustav,
					$searchStatisticGen.conf,
					$section,
					formData,
					outData,
					outData200,
					$language
				);
			} catch (error) {
				// ignore intentionally
				void error;
			}

			if (!objDataSite) {
				loading = false;
			} else {
				objDataSite.then((dataVal) => {
					dataSite = dataVal;
					loading = false;
				});
			}
		}
	});
</script>
{#if loading}
	<div id="vysledek-vyhledavani-c" class="c-loader">
		<Loader />
	</div>
{:else}
	{#if $searchStatisticGen.conf === 'UT05' && $section == 'ustav'}
		{#if dataSite && Array.isArray(dataSite) && dataSite.length}
			<div class="mt-1">
				{#if listFormatSite == 'ol'}
					<ol>
						{#each dataSite as menuItem, i (i)}
							<li class="ls">
								<a
									href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}{m(
										'oddeleni.detail',
										$language
									)}{menuItem[0]}-{menuItem[4]}"
									data-sveltekit-preload-data="off">{menuItem[1]}</a
								>
							</li>
						{/each}
					</ol>
				{:else}
					<ul class="c-ul-li">
						{#each dataSite as menuItem, i (i)}
							<li class={menuItem[5] ? 'b-canceled' : 'b-active'}>
								{#if menuItem[4] == 'oddeleni-dejin-slavistiky-a-slovanskych-literatur---78-works-dyn'}
									x
								{:else}
									<a
										href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}{m(
											'oddeleni.detail',
											$language
										)}{menuItem[0]}-{menuItem[4]}"
										data-sveltekit-preload-data="off"
										>{menuItem[1]}{menuItem[3] ? ' (' + menuItem[3] + ')' : ''}</a
									>
									{menuItem[2] ? ' (' + menuItem[2] + ')' : ''}
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{:else if dataSite && Array.isArray(dataSite) && !dataSite.length}
			{t('obecne.ustav_neeviduje_oddeleni', $language)}
		{:else}
			<div class="mt-1"><em>{t('site.form.chyba_zpracovani_oddeleni', $language)}</em></div>
		{/if}
	{/if}
{/if}


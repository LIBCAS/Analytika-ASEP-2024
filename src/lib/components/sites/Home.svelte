<script>
	import { onMount } from 'svelte';

	// modul header
	import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';

	// stores
	import { instituteAreas } from '$lib/stores/instituteAreas.js';

	// translate
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translate';
	import { m } from '$lib/utils/menuUrl';

	import settings from '$lib/settings';
	let base = settings.domena;
	let region1 = false;
	let region2 = false;
	let region3 = false;
	let region4 = false;

	$: if ($instituteAreas[1]) region1 = true;
	$: if ($instituteAreas[2]) region2 = true;
	$: if ($instituteAreas[3]) region3 = true;
	$: if ($instituteAreas[4]) region4 = true;

	/** @type  {string} Main heading*/
	$: nadpisStranky = t('site.home.nadpis_archiv_av_cav', $language) + '';

	/** @type  {string} */
	$: nadpisStrankyText = t('site.home.head_text_1', $language);

	/** @type  {boolean} */
	let innerHeading = false;
	const isHome = true;
	let sections;

	/**
	 * Min height for headers
	 */
	function setMinHeight() {
		let nodeList = document.querySelectorAll('.c-tri-bloky-text-1 h3');
		let maxHeight = 10;
		nodeList.forEach((item) => {
			if (item instanceof HTMLElement) {
				const height = item.offsetHeight;
				if (height > maxHeight) {
					maxHeight = height;
				}
			}
		});
		nodeList.forEach((item) => {
			if (item instanceof HTMLElement) {
				item.style.minHeight = maxHeight + 'px';
			}
		});
	}
	onMount(() => {
		setMinHeight();
		window.addEventListener('resize', setMinHeight);
	});
</script>

<main id="site">
	<section class="l-head-container-2">
		<MainHeading {nadpisStranky} {nadpisStrankyText} {innerHeading} {isHome} />
	</section>
	<div class="l-main">
		<div class="c-tri-bloky-text-1" bind:this={sections}>
			<section class="c-tri-bloky-text-1__item" id="institution">
				{#if region1}
					<h3>
						{t('oblast.1', $language)}
					</h3>
					<ul>
						{#each $instituteAreas[1] as ustav, i (i)}
							<li>
								<a
									href="{base}{m('menu.zvolitUstav', $language)}{ustav[0]}/"
									data-sveltekit-preload-data="off">{ustav[1]}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
			<section class="c-tri-bloky-text-1__item">
				{#if region2}
					<h3>
						{t('oblast.2', $language)}
					</h3>
					<ul>
						{#each $instituteAreas[2] as ustav, i (i)}
							<li>
								<a
									href="{base}{m('menu.zvolitUstav', $language)}{ustav[0]}/"
									data-sveltekit-preload-data="off">{ustav[1]}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
			<section class="c-tri-bloky-text-1__item">
				{#if region3}
					<h3>
						{t('oblast.3', $language)}
					</h3>
					<ul>
						{#each $instituteAreas[3] as ustav, i (i)}
							<li>
								<a
									href="{base}{m('menu.zvolitUstav', $language)}{ustav[0]}/"
									data-sveltekit-preload-data="off">{ustav[1]}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		</div>
		<aside class="c-dva-bloky-text-1">
			<section class="c-dva-bloky-text-1__item">
				{#if region4}
					<h3>{t('oblast.4', $language)}</h3>
					<ul>
						{#each $instituteAreas[4] as ustav, i (i)}
							<li>
								<a
									href="{base}{m('menu.zvolitUstav', $language)}{ustav[0]}/"
									data-sveltekit-preload-data="off">{ustav[1]}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		</aside>
	</div>
</main>



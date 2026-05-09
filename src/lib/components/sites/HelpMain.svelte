<script>
	// translate
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translate';

	// Main heading
	import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';
	import HelpTextCs from '$lib/components/sites/HelpTextCs.svelte';
	import HelpTextEn from '$lib/components/sites/HelpTextEn.svelte';

	/** @type  {string} */
	$: nadpisStranky = t('menu.napoveda', $language, 'u');	//t('obecne.o_databazi', $language, 'u');

	/** @type  {string} */
	let nadpisStrankyText = '';

	/** @type  {boolean} */
	let innerHeading = false;

	// Breadcrumb
	import Breadcrumb from '$lib/components/sites/lib/Breadcrumb.svelte';
	$: endtext = t('menu.napoveda', $language, 'l');
</script>
<section class="l-head-container-2 l-head-container-2--site"></section>
<main id="site">
	<div class="l-main">
		<div class="l-site-subpage11">
			<div class="l-site-normal">
				<Breadcrumb {endtext} />
				<MainHeading {nadpisStranky} {nadpisStrankyText} {innerHeading} />
				{#if ($language === 'en')}
				<HelpTextEn />
				{:else}
				<HelpTextCs />
				{/if}
			</div>
		</div>
	</div>
	<div>&nbsp;</div>
</main>



<script>
	// translate
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translate';

	// Main heading
	import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';
	/** @type  {string} */
	$: nadpisStranky = t('obecne.o_databazi', $language, 'u');
	/** @type  {string} */
	$: nadpisStrankyText = t('obecne.o_databazi_sber', $language, 'u');
	/** @type  {boolean} */
	let innerHeading = false;

	// Breadcrumb
	import Breadcrumb from '$lib/components/sites/lib/Breadcrumb.svelte';
	$: endtext = t('obecne.o_databazi', $language, 'l');
</script>

<main id="site">
	<section class="l-head-container-2">
		<MainHeading {nadpisStranky} {nadpisStrankyText} {innerHeading} />
	</section>
</main>

<main id="site">
	<div class="l-main">
		<div class="l-site-jeden-blok">
			<div class="l-site-normal">
				<Breadcrumb {endtext} />

				<h2>{t('site.o_databazi.nadpis1', $language)}</h2>
				<p>
					{@html t('site.o_databazi.text1a', $language)}
				</p>
				<p>&nbsp;</p>
				<p>
					{@html t('site.o_databazi.text1b', $language)}
				</p>
				<p>
					{@html t('site.o_databazi.text1c', $language)}
				</p>
				<p>
					{@html t('site.o_databazi.text1d', $language)}
				</p>

				<h3>{t('site.o_databazi.nadpis2', $language)}</h3>
				<p>
					{@html t('site.o_databazi.text2a', $language)}
				</p>
				<p>
					{@html t('site.o_databazi.text2b', $language)}
				</p>
				<p>
					{@html t('site.o_databazi.text2c', $language)}
				</p>

				<h4>{t('site.o_databazi.nadpis3', $language)}</h4>
				<p>
					{@html t('site.o_databazi.text3a', $language)}
				</p>
				<h4>{t('site.o_databazi.nadpis4', $language)}</h4>
				<p>
					{@html t('site.o_databazi.text4a', $language)}
				</p>
				<h4>{t('site.o_databazi.nadpis5', $language)}</h4>
				<p>
					{@html t('site.o_databazi.text5a', $language)}
				</p>
			</div>
		</div>
	</div>
	<div>&nbsp;</div>
</main>




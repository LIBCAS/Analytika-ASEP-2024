<script>
	// import imgs
	import ImgAvLogo from '$lib/static/images/avcr-logo.png';
	import ImgAvLogoEn from '$lib/static/images/avcr-logo-en.png';

	// stores
	import { language } from '$lib/stores/language';
	import { year } from '$lib/stores/year';

	// utils
	import { t } from '$lib/utils/translate';
</script>
<footer class="l-foot-container-0">
	<div class="l-foot-container-1">
		<div class="l-foot-container-1__cav">
			{#if $language === 'en'}
				<a href="http://www.cas.cz">
					<img src={ImgAvLogoEn} alt={t('footer.akademie', $language)} width="700" height="189" />
				</a>
			{:else if $language === 'sk'}
				<a href="http://www.cas.cz">
					<img src={ImgAvLogo} alt={t('footer.akademie', $language)} width="700" height="189" />
				</a>
			{:else}
				<a href="http://www.cas.cz">
					<img src={ImgAvLogo} alt={t('footer.akademie', $language)} width="700" height="189" />
				</a>
			{/if}
		</div>
		<div class="l-foot-container-1__links">
			<p class="muted credit mt-0">&copy; {$year} Knihovna AV ČR, v. v. i.</p>
			<p class="mt-0">
				{t('footer.email_kontakt', $language)}: <a href="mailto:arl@lib.cas.cz" title="{t('footer.email_kontakt', $language)}">arl@lib.cas.cz</a>
			</p>
		</div>
	</div>
</footer>
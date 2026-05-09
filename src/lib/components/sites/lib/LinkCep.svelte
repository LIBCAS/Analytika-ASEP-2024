<script>
	export let icoInstitution = '';

	// storage
	import { language } from '$lib/stores/language';

	// utils
	import { t } from '$lib/utils/translate';

	// icon
	import iconVvi from '$lib/static/images/icon-vvi.webp';

	const baseUrlLink = 'https://www.isvavai.cz/cea?s=subjekty&n=0&ss=detail&h=ico:';
</script>
{#if icoInstitution}
	<div class="c-autor-list">
		<div class="c-autor-ida__item">
			<a
				href="{baseUrlLink}{icoInstitution}"
				target="_blank"
			>
				<img src={iconVvi} alt="vyzkum.gov.cz" class="mr-1" height="25" width="25" />
			</a>
		</div>
		<a
			href="{baseUrlLink}{icoInstitution}"
			target="_blank">{t('obecne.projekty_ev_cep', $language, 'u')}</a
		>
	</div>
{/if}




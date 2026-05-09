<script>
	import { onMount } from "svelte";

	// UTILS
	import { scrollTop } from '$lib/utils/scrollTop';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/utils/translate';

	onMount(() => {});
	const handleClickVysledek = () => {
		scrollTop();
	};
</script>
<div class="lsc-form__item--send lsc-form-buttom">
	<button type="submit" on:click|preventDefault={handleClickVysledek}
		>{t('site.form.upravit_kriteria', $language, 'u')}</button
	>
</div>
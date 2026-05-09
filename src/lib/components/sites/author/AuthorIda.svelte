<script>
	/** @type  {?Object<string, string>} ida data */
	export let ida = null;

	// stores
	import { language } from '$lib/stores/language';

	// utils
	import { t } from '$lib/utils/translate';
	import { s } from '$lib/utils/serverUrl';

	// static
	import iconOrcid from '$lib/static/images/orcid.webp';
	import iconWos from '$lib/static/images/svg/icons/wos2.svg';
	import iconScopus from '$lib/static/images/svg/icons/scopus-author.svg';

	// ida urls
	let idaUrls = {};
	idaUrls['orcid'] = s('server.orcidAuthorRecord');
	idaUrls['wos'] = s('server.wosAuthorRecord');
	idaUrls['scopus'] = s('server.scopusAuthorRecord');
	idaUrls['icon_orcid'] = iconOrcid;
	idaUrls['icon_wos'] = iconWos;
	idaUrls['icon_scopus'] = iconScopus;

	/** @type {Object<string,string>} Text for ikon */
	const texts = {};
	texts['ipac'] = t('repozitory.ipac.abbr', $language, 'u');
	texts['handlenet'] = t('repozitory.handlenet.abbr', $language, 'u');
	texts['scopus'] = t('repozitory.scopus.abbr', $language, 'u');
	texts['wos'] = t('repozitory.wos.abbr', $language, 'u');
	texts['pubmed'] = t('repozitory.pubmed.abbr', $language, 'u');
	texts['doi'] = t('repozitory.doi.abbr', $language, 'u');
	texts['riv'] = t('repozitory.riv.abbr', $language, 'u');
	texts['orcid'] = t('repozitory.orcid.abbr', $language, 'u');
</script>

{#if ida}
	<div class="c-author-detail-ida">
		{#if ida.orcid && ida.orcid !== ''}
			<div class="c-autor-ida__item c-autor-ida__item--orcid">
				<a href="{idaUrls['orcid']}{ida.orcid}" title={texts['orcid']} target="_blank"
					><img src={idaUrls['icon_orcid']} alt="'{texts['orcid']}" /></a
				>
			</div>
		{/if}
		{#if ida.wos && ida.wos !== ''}
			<div class="c-autor-ida__item c-autor-ida__item--wos">
				<a href="{idaUrls['wos']}{ida.wos}" title={texts['wos']} target="_blank"
					><img src={idaUrls['icon_wos']} alt="'{texts['wos']}" /></a
				>
			</div>
		{/if}
		{#if ida.scopus && ida.scopus !== ''}
			<div class="c-autor-ida__item c-autor-ida__item--scopus">
				<a href="{idaUrls['scopus']}{ida.scopus}" title={texts['scopus']} target="_blank"
					><img src={idaUrls['icon_scopus']} alt="'{texts['scopus']}" /></a
				>
			</div>
		{/if}
		{#if ida.rivid && ida.rivid !== ''}
			<div class="c-autor-ida__item c-autor-ida__item--rivid">
				<strong>RIV ID {ida.rivid}</strong>
			</div>
		{/if}
	</div>
{/if}











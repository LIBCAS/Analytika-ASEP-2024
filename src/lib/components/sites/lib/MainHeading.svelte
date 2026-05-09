<script>
	/** @type  {String} */
	export let nadpisStranky = '';
	export let nadpisStrankyText = '';
	export let napovedaMenu = '';
	export let nadpisForm = '';
	/** @type  {Boolean} */
	export let innerHeading = false;
	/** @type  {?Object<string, string>} */
	export let ida = null;
	export let isHome = false;

	// components
	import AuthorIda from '$lib/components/sites/author/AuthorIda.svelte';

	// stores
	import { language } from '$lib/stores/language';

	// utils
	import { t } from '$lib/utils/translate';
</script>
{#if isHome}
	{#if innerHeading}
		<h2 class="mb-0 no-ca">{nadpisStranky}</h2>
	{:else}
		<h1 class="h1-site">{nadpisStranky}</h1>
	{/if}
	{#if $language == 'en'}
		<div class="c-home-news-1">
			<p>
				The Analytics ASEP extension is used to display analytical and graphical reports,
				that are based on a combination of queries and calculations over data stored in the ASEP Repository.
				<br
				/>
				The new version of Analytics ASEP uses the Rest API of the ARL system.</p>
				<p>
				<strong>Reports on the Czech Academy of Sciences as a whole and bibliometrics are not currently available</strong>.<br />
				<strong>We are preparing new reports</strong>, they will be edited in cooperation with <abbr title="Czech Academy of Sciences">CAS</abbr> departments.
			</p>
			<p>

				<strong>The original  <abbr title="Analytics ASEP">AA</abbr></strong> are available at: <a
					href="https://archiv-asep-analytika.lib.cas.cz/"
					target="_blank">https://archiv-asep-analytika.lib.cas.cz/</a
				>. 
				Please note that <strong>the last update of the statistical overviews was on 27. 3. 2025</strong>.
			</p>
			<p>
				<strong>Newly included are summaries of data records</strong>. 
				More information about the changes
				<a
						href="https://asep-portal.lib.cas.cz/analytika-asep/"
						target="_blank">can be found here</a
					>.
			</p>
			<p>
				<strong>If you have questions or concerns reach out to us at: <a href="mailto:arl@lib.cas.cz">arl@lib.cas.cz</a></strong>.
			</p>
		</div>
	{:else}
	<div class="c-home-news-1">
		<p>
			Programová nadstavba Analytika ASEP slouží pro zobrazení analytických a grafických přehledů,
			které jsou založeny na kombinaci dotazů a výpočtů nad daty uloženými v Repozitáři ASEP. <br
			/>
			Nová verze Analytik ASEP využívá Rest API systému ARL.</p>
		<p>
			<strong>Přehledy o AV ČR jako celku a bibliometrie nejsou v současné době k dispozici</strong>.<br />
			<strong>Připravujeme nové přehledy</strong>, budou upraveny ve spolupráci s pracovišti AV ČR.
		</p>
		<p>
			<strong>Původní  <abbr title="Analytiky ASEP">AA</abbr></strong> jsou přístupná na: <a
				href="https://archiv-asep-analytika.lib.cas.cz/"
				target="_blank">https://archiv-asep-analytika.lib.cas.cz/</a
			>. Upozorňujeme, že <strong>poslední aktualizace statistických přehledů proběhla k 27. 3. 2025</strong>.
		</p>
		<p>
		<strong>Nově jsou zařazeny přehledy datových záznamů</strong>. 
		Další informace o změnách 
		<a
				href="https://asep-portal.lib.cas.cz/analytika-asep/"
				target="_blank">najdete zde</a
			>.
		</p>
		<p>
		<strong>V případě jakýchkoliv dotazů či nejasností se obraťte na podporu: <a href="mailto:arl@lib.cas.cz">arl@lib.cas.cz</a></strong>.
		</p>
	</div>
	{/if}
{:else if !ida}
	<div class="c-nadpis-napoveda">
		<div class="c-nadpis-napoveda__nadpis">
			{#if innerHeading}
				<h2 class="mb-0 no-ca">{nadpisStranky}</h2>
			{:else}
				<h1 class="h1-site">{nadpisStranky}</h1>
			{/if}
			{#if nadpisStrankyText !== ''}
				<p>
					{nadpisStrankyText}
				</p>
			{/if}
		</div>
		<p class="c-nadpis-napoveda__odkaz">
			{#if napovedaMenu}
				<a
					href={napovedaMenu}
					title={nadpisForm + ' - ' + t('obecne.napoveda', $language, 'l')}
					target="_blank">{t('obecne.napoveda', $language, 'u')}</a
				>
			{/if}
		</p>
	</div>
{:else}
	<div class="c-nadpis-napoveda">
		<div class="c-nadpis-napoveda__nadpis">
			<div class="l-header-author-ida">
				<div class="l-header-author-ida__item1">
					{#if innerHeading}
						<h2 class="mb-0 no-ca">{nadpisStranky}</h2>
					{:else}
						<h1 class="h1-site">{nadpisStranky}</h1>
					{/if}
				</div>
				<div class="l-header-author-ida__item2">
					<AuthorIda {ida} />
				</div>
			</div>
			{#if nadpisStrankyText !== ''}
				<p>
					{nadpisStrankyText}
				</p>
			{/if}
		</div>
		<p class="c-nadpis-napoveda__odkaz">
			{#if napovedaMenu}
				<a
					href={napovedaMenu}
					title={nadpisForm + ' - ' + t('obecne.napoveda', $language, 'l')}
					target="_blank">{t('obecne.napoveda', $language, 'u')}</a
				>
			{/if}
		</p>
	</div>
{/if}


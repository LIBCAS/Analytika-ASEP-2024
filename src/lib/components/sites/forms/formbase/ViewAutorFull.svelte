<script>
	/** @type {?Object<string, any>} */
	export let dataArl = null;

	/** @type {?Function} */
	export let setFormData = null;

	/** @type {Object<string, string>} */
	export let texts = {};

	// static
	import iconOrcid from '$lib/static/images/orcid.webp';
	import iconWos from '$lib/static/images/svg/icons/wos2.svg';
	import iconScopus from '$lib/static/images/svg/icons/scopus-author.svg';

	// components
	import PaginationAuthors from '$lib/components/sites/forms/formbase/PaginationAuthors.svelte';

	import settings from '$lib/settings';
	let base = settings.domena;

	// stores
	import { language } from '$lib/stores/language';

	// utils
	import { s } from '$lib/utils/serverUrl';
	import { m } from '$lib/utils/menuUrl';
	import { getIdAuthorLname } from '$lib/utils/author/getIdAuthorLname.js';
	import { idaTextList } from '$lib/utils/author/idaTextList.js';

	// ida url for utilitis
	/** @type {Object<string, ?string>} */
	let idaUrls = {};
	idaUrls['orcid'] = s('server.orcidAuthorRecord');
	idaUrls['wos'] = s('server.wosAuthorRecord');
	idaUrls['scopus'] = s('server.scopusAuthorRecord');
	idaUrls['icon_orcid'] = iconOrcid; //base+'/images/orcid.webp';
	idaUrls['icon_wos'] = iconWos; //base+'/images/orcid.webp';
	idaUrls['icon_scopus'] = iconScopus; // base+'/images/svg/icons/scopus-author.svg';

	/**
	 * @typedef {Object} ArlDataAuthor
	 * @property {string} [lname]
	 * @property {string} [name]
	 * @property {Object<string, string>} [ida]
	 */
	/** @type {?Array<ArlDataAuthor>} */
	let dataArlAct = null;

	/** @type {?number} */
	let hits = null;

	if (dataArl) {
		hits = dataArl.hits || dataArl.hists || null;
		if (typeof dataArl !== 'undefined' && typeof dataArl.authors !== 'undefined') {
			dataArlAct = dataArl.authors;
		}
	}
	let site = 1;
	const siteSize = 50;

	// view components
	let viewStrankovani = false;
	let nenalezeno = texts['neodpovida_zaznam'];

	/**
	 * Handle site
	 * @param {?Array<object>} dataArl
	 * @param {?number} hits
	 * @param {number} siteF
	 * @param {number} siteSize
	 * @return Object
	 */
	const handleSite = (dataArl, hits, siteF = 1, siteSize = 50) => {
		if (typeof site !== 'undefined' && site !== null) {
			site = siteF;
		}
		let siteLast = 0;
		if (hits) {
			siteLast = Math.ceil(hits / siteSize);
		}

		/** @type {Object<string, any>} */
		const out = {};
		out.data = [];

		/** @type {number} */
		out.nalezeno = 10;

		/** @type {Array<object>} */
		let outData = [];
		let arrStart = 0;
		let arrEnd = 0;

		if (dataArl) {
			const outWhole = dataArl;
			if (outWhole.length > 0) {
				viewStrankovani = siteLast > 1 ? true : false;
				if (viewStrankovani) {
					arrStart = siteF * siteSize - siteSize;
					if (arrStart < 0) {
						arrStart = 0;
					}
					arrEnd = siteF * siteSize;
					outData = outWhole.slice(arrStart, arrEnd);
				} else {
					outData = outWhole;
				}
			}
		}
		out.data = outData;
		return out;
	};

	/** @type Object<string, any> */
	let objOut = {};
	objOut.data = [];
	$: if (site) {
		objOut = handleSite(dataArlAct, hits, site, siteSize);
	}
</script>
<div class="l-vysledek-vyhledavani-2" id="vysledek-vyhledavani">
	{#if hits && hits > 0}
		<div class="c-container-vysledky2 mb-2">
			<div class="c-vysledky2-nalezeno">
				{texts['nalezeno_zaznamu']}: <strong>{hits}</strong>
			</div>
		</div>
	{/if}
	{#if !hits || hits < 1}
		<div class="l-nenalezeno">
			<em>{nenalezeno}.</em>
		</div>
	{:else}
		{#if viewStrankovani}
			<PaginationAuthors {dataArlAct} {hits} {texts} {handleSite} {setFormData} {site} {siteSize} />
		{/if}
			<ul class="l-vysledek-vyhledavani-2__data c-ul-li" data-sveltekit-preload-data="off">
				{#each objOut.data as outItem, i (i)}
					<li class="mb-1x">
						<div class="c-autor-list">
							<a
								href="{base}{m('menu.zvolitUstav', $language)}{outItem.ustav.toLowerCase()}{m(
									'autor',
									$language
								)}#{getIdAuthorLname(outItem.lname)}"
								title={outItem.name}
								rel="external">{outItem.name} ({outItem.ustav})</a
								>{@html idaTextList(outItem.ida, texts, idaUrls)}
						</div>
					</li>
				{/each}
			</ul>
		{#if viewStrankovani}
			<PaginationAuthors {dataArlAct} {hits} {texts} {handleSite} {setFormData} {site} {siteSize} />
		{/if}
	{/if}
</div>
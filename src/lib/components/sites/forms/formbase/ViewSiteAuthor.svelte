<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataText.js').ArlDataText} ArlDataText */
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataAuthors.js').ArlDataAuthors} ArlDataAuthors */
	/** @type {Object<string,string>} */
	export let texts = {};

	/** @type {Object<string, any>} */
	export let formData = {};

	/** @type {String} */
	export let urlBase = '';

	/** @type {String} */
	export let conf = '';

	/** @type {?Function} */
	export let setFormData = null;

	/** @type {Object<string, any>} */
	export let dataSend = {};

	/** @type {?ReturnType<typeof setTimeout>} */
	let interval3 = null;

	// static
	import iconOrcid from '$lib/static/images/orcid.webp';
	import iconWos from '$lib/static/images/svg/icons/wos2.svg';
	import iconScopus from '$lib/static/images/svg/icons/scopus-author.svg';

	// components
	import Loader from '$lib/components/sites/lib/Loader.svelte';
	import PaginationAuthors from '$lib/components/sites/forms/formbase/PaginationAuthors.svelte';

	// stores
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utilitis
	import { s } from '$lib/utils/serverUrl';
	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	const base = settings.domena;
	import { formSites } from '$lib/utils/jssender/formSites.js';
	import { idaTextList } from '$lib/utils/author/idaTextList.js';
	import { getIdAuthorLname } from '$lib/utils/author/getIdAuthorLname.js';

	// ida url for utilitis
	/** @type {Object<string, ?string>} */
		let idaUrls = {};
	idaUrls['orcid'] = s('server.orcidAuthorRecord');
	idaUrls['wos'] = s('server.wosAuthorRecord');
	idaUrls['scopus'] = s('server.scopusAuthorRecord');
	idaUrls['icon_orcid'] = iconOrcid; //base+'/images/orcid.webp';
	idaUrls['icon_wos'] = iconWos; //base+'/images/orcid.webp';
	idaUrls['icon_scopus'] = iconScopus; // base+'/images/svg/icons/scopus-author.svg';

	/** @type {boolean} */
	let loading = true;

	/** @type {?ArlDataAuthors} */
	let dataArl = null;

	/** @type {Number} */
	const sl = 700;

	/** @type {?number} */
	let hits = null;

	/** @type {?Array<ArlDataText>} */
	let dataArlAct = null;

	// view komp.
	let viewStrankovani = false;
	let nenalezeno = texts['neodpovida_zaznam'];

	let site = 1;
	const siteSize = 50;
	/** @type {?Array<Number>}*/
	let siteArr = null;

	/**
	 * Handle site
	 * @param {?Array<object>} dataArl
	 * @param {?number} hits
	 * @param {number} siteF
	 * @param {number} siteSize
	 * @return Object
	 */
	 const handleSite = (dataArl, hits, siteF = 1, siteSize = 50, siteArrS = null) => {
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
		if (siteArrS) {
			siteArr = siteArrS;
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

	onMount(() => {
		loading = true;
		dispatch('setLoader', { loading });
		if (typeof dataSend.conf !== 'undefined') {
			let outDataArl = formSites(site, urlBase, dataSend, $language, conf);
			outDataArl.then((dataValLs) => {
				if (interval3) {
					clearTimeout(interval3);
				}
				interval3 = setTimeout(function () {
					loading = false;
					dispatch('setLoader', { loading });
				}, sl);
				dataArl = dataValLs;
				if (dataArl) {
					hits = dataArl.hits || dataArl.hists || null;
					if (typeof dataArl !== 'undefined' && typeof dataArl.authors !== 'undefined') {
						dataArlAct = dataArl.authors;
					} else {
						nenalezeno = texts['chyba'];
					}
				}
			});
		}
	});
</script>

{#if loading}
	<div id="vysledek-vyhledavani-c" class="c-loader">
		<Loader />
	</div>
{:else}
	<div id="vysledek-vyhledavani-c">
		{#if hits && hits > 0}
			<div class="c-container-vysledky2">
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
				<PaginationAuthors
					{dataArlAct}
					{hits}
					{texts}
					{handleSite}
					{setFormData}
					{site}
					{siteSize}
					{siteArr}
				/>
			{/if}
			<ul class="l-vysledek-vyhledavani-2__data c-ul-li" data-sveltekit-preload-data="off">
				{#each objOut.data as outItem, i (i)}
					<li class="mb-1x">
						<div class="c-autor-list">
							<a
								href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}{m(
									'autor',
									$language
								)}#{getIdAuthorLname(outItem.lname)}"
								title={outItem.name}
								rel="external">{outItem.name}</a
							>{@html idaTextList(outItem.ida, texts, idaUrls)}
						</div>
					</li>
				{/each}
			</ul>
			{#if viewStrankovani}
				<PaginationAuthors
					{dataArlAct}
					{hits}
					{texts}
					{handleSite}
					{setFormData}
					{site}
					{siteSize}
					{siteArr}
				/>
			{/if}
		{/if}
	</div>
{/if}
<script>
/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataTrideni.js').ArlDataTrideni} ArlDataTrideni */

/** @type {?Object<string, any>} */
	export let dataArl = null;

	/** @type {string} */
	export let queryFulltext = '';

	/** @type {string} */
	export let sortFulltext = '';
	

	/** @type {?Array<string>} */
	export let outRecords = null;

	/** @type {?Function} */
	export let setFormData = null;

	/** @type {Object<string, string>} */
	export let texts = {};

	// static
	import iconOrcid from '$lib/static/images/orcid.webp';
	import iconWos from '$lib/static/images/svg/icons/wos2.svg';
	import iconScopus from '$lib/static/images/svg/icons/scopus-author.svg';

	// settings
	import settings from '$lib/settings';
	let base = settings.domena;

	// utils
	import { t } from '$lib/utils/translate';
	
	// components
	import SelectZobrazovak from '$lib/components/sites/forms/formbase/SelectZobrazovak.svelte';

	const isFulltext = true;

	// stores
	import { devel } from '$lib/stores/devel';
	import { language } from '$lib/stores/language';

	// utils
	import { s } from '$lib/utils/serverUrl';
	import { auxilitary } from '$lib/utils/outcome/auxilitary.js';
	import { forms } from '$lib/utils/jsloader/forms.js';
	import { m } from '$lib/utils/menuUrl';

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


	/** @type {?number} */
	let hits = null;

	if (dataArl) {
		hits = dataArl.hits || dataArl.hists || null;
	}
	/**
	 * Reselect zf
	 * @param {string} str
	 */
	const handleSubmit = (str) => {
		const url = base + m('menu.search', $language);
		let q = queryFulltext
		let sort = str
		window.location.href = `${url}?q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`;
	}

	/** @type Object<string, string|Array<string>>|null */
	/** @type ArlDataTrideni|null */
	let dataZf = null;
	const dataTrideni = null
	const dataFormBase = {};
		dataFormBase.conf = '';
		dataFormBase.menu = '';
		dataFormBase.url = '';

	let outDataSl = forms(
			'KONFIG_ZF_01', // "KONFIG_STRANA_DEV",
			s('server.forms_arl'),
			$language,
			'',
			'',
			$devel
		);
		outDataSl.then((dataVal) => {
			dataZf = {'name':'zf'}
			if (dataVal.outData200 &&
				Array.isArray(dataVal.outData200)
			) {
				dataZf.data = dataVal.outData200;
			}
		}
	);

	// view komp.
	let nenalezeno = texts['neodpovida_zaznam'];
	/** @type {string} Name of base CSS class for auxiliary */
	let auxiliaryBaseClass = 'c-records';

	/** @type Object<string, any> */
	let objOut = {};
	objOut.data = [];

	/** @type {Array<Object<string,string>>} */
	let outAuxiliary = [];
	const conf = null;
	let rivInfo = false;
	if (dataArl) {
		outAuxiliary = auxilitary(dataArl.auxiliary, texts, 'all', conf);
		if (dataArl?.auxiliary &&
		dataArl?.auxiliary[0] &&
		dataArl?.auxiliary[0]['data'] && 
		dataArl?.auxiliary[0]['data']['others'] &&
		dataArl?.auxiliary[0]['data']['others'] == '1'
		) {
			rivInfo = false;
		}
	}
</script>

<div class="l-vysledek-vyhledavani-2" id="vysledek-vyhledavani">
	{#if hits && hits > 0 &&
	typeof dataZf !== 'undefined' &&
	dataZf
	}
	<div class="c-container-vysledky1">
		<div class="c-vysledky1-nalezeno">
			{texts['nalezeno_zaznamu']}: <strong>{hits}</strong>
		</div>
		<div class="c-vysledky1-trideni">
			<div class="c-vysledky1-trideni__select lsc-form-select lsc-form-select--sm">
			<SelectZobrazovak {dataTrideni} {dataZf} {texts} {isFulltext} {sortFulltext} {handleSubmit} />
			</div>
		</div>
	</div>
	{/if}

	{#if !hits || hits < 1}
		<div class="l-nenalezeno">
			<em>{nenalezeno}.</em>
		</div>
	{:else}
	<div class="l-vysledek-vyhledavani__data78" id="vysledek-vyhledavani__data">
			{#if outRecords}
				{#each outRecords as outItem, keyItem (keyItem)}
					<div class={auxiliaryBaseClass}>
						<div class="{auxiliaryBaseClass}__item1 mt-1">
							{@html outItem}
							{#if rivInfo}
								<p class="c-riv-info">{t('obecne.info_text_riv', $language)}</p>
							{/if}
						</div>
						{#if typeof outAuxiliary[keyItem] !== 'undefined' && typeof outAuxiliary[keyItem]['data'] !== 'undefined' && outAuxiliary[keyItem]['data']}
							<div class="{auxiliaryBaseClass}__item2 mt-1" data-html2canvas-ignore>
								{@html outAuxiliary[keyItem]['data']}
							</div>
						{/if}
					</div>
				{/each}
			{/if}
			<div id="vysledek-vyhledani__data-time"></div>
		</div> 
	{/if}
</div>
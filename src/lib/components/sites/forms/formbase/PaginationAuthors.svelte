<script>
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataAuthors.js').ArlDataAuthors} ArlDataAuthors */

	/** @type {Object<string,string>} */
	export let texts = {};
	/** @type {?function} */
	export let handleSite = null;
	/** @type {?function} */
	export let setFormData = null;

	/** @type {?Array<ArlDataAuthors>} */
	export let dataArlAct = null;

	/** @type {?number} */
	export let hits = null;
	export let site = 1;
	export let siteSize = 50;
	/** @type {?Array<Number>}*/
	export let siteArr = null;

	let siteLast = 0;
	let firstSite = 1;
	if (hits) {
		siteLast = Math.ceil(hits / siteSize);
	}
	function getArrSite() {
		// console.log('sitesing LS');
		const out = [];
		let startSite = firstSite;
		let endSite = siteLast;
		const totalSites = siteLast;
		const maxVisSite = 5;
		let actSite = site;
		if (siteLast <= maxVisSite) {
			startSite = 1;
			endSite = siteLast;
		} else {
			const maxPagesBeforeCurrentPage = Math.floor(maxVisSite / 2);
			const maxPagesAfterCurrentPage = Math.ceil(maxVisSite / 2) - 1;
			if (actSite <= maxPagesBeforeCurrentPage) {
				startSite = 1;
				endSite = maxVisSite;
			} else if (actSite + maxPagesAfterCurrentPage >= totalSites) {
				startSite = totalSites - maxVisSite + 1;
				endSite = totalSites;
			} else {
				startSite = actSite - maxPagesBeforeCurrentPage;
				endSite = actSite + maxPagesAfterCurrentPage;
			}
		}
		for (let i = startSite; i <= endSite; i++) {
			out.push(i);
		}
		return out;
	}
	siteArr = getArrSite();
	function refreshData(actSite = 1) {
		if (actSite && setFormData) {
			setFormData(actSite);
			site = actSite;
		}

		if (handleSite) {
			siteArr = getArrSite();
			handleSite(dataArlAct, hits, site, siteSize, siteArr);
		}
		siteArr = getArrSite();
	}

	function nextPage() {
		if (site < siteLast) site += 1;
		refreshData(site);
	}

	function prevPage() {
		if (site > firstSite) site -= 1;
		refreshData(site);
	}

	function setPage(siteAct = 1) {
		if (siteAct < firstSite) {
			site = firstSite;
		} else if (siteAct > siteLast) {
			site = siteLast;
		} else {
			site = siteAct;
		}
		refreshData(site);
	}
</script>

{#if hits && hits}
	<div class="lsc-strankovani">
		<button on:click={prevPage} disabled={site === firstSite}>&larr; {texts['predchozi']}</button>
		{#if siteArr}
			{#each siteArr as siteSeznam, i (i)}
				<button
					aria-label="green"
					class="lsc-strankovani-button-site"
					on:click={() => setPage(siteSeznam)}
					disabled={site === siteSeznam}>{siteSeznam}</button
				>
			{/each}
		{/if}

		<button on:click={nextPage} disabled={site === siteLast}>{texts['dalsi']} &rarr;</button>
	</div>
{/if}
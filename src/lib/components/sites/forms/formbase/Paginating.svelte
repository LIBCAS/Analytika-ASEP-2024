<script>
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/ArlDataText').ArlDataText} ArlDataText */

	/** @type {Object<string,string>} */
	export let texts = {};
	/** @type {?ArlDataText} */
	export let dataArl = null;

	/** @type {?Function} */
	export let handleSubmit;
	/** @type {?Function} */
	export let setFormData = null;

	/** @type {?Number} */
	let site = null;
	/** @type {?Number} */
	let siteLast = null;
	/** @type {?Number} */
	let first = null;
	let firstSite = 1;
	let viewSiter = false;

	if (dataArl && typeof dataArl.hits !== 'undefined' && dataArl.hits !== null) {
		site = Number(dataArl.page);
	}
	if (dataArl && typeof dataArl.pageLast !== 'undefined' && dataArl.pageLast !== null) {
		siteLast = Number(dataArl.pageLast);
	}
	if (dataArl && typeof dataArl.first !== 'undefined' && dataArl.first !== null) {
		first = Number(dataArl.first);
	}

	function getArrSite() {
		const out = [];
		let startSite = firstSite;
		let endSite = siteLast;

		/** @type {Number} */
		const totalSites = siteLast || 1;
		const maxVisSite = 5;

		/** @type {Number} */
		let actSite = site || 1;

		if (totalSites && totalSites > 1) {
			viewSiter = true;
		}

		if (siteLast && siteLast <= maxVisSite) {
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
	let siteArr = getArrSite();

	/**
	 * Refresh all values
	 * @param {Number} actSite
	 */
	function refreshData(actSite) {
		if (setFormData && handleSubmit) {
			setFormData(actSite);
			handleSubmit('strankovani');
		}
	}

	/**
	 * Set next page
	 */
	function nextPage() {
		if (site && siteLast && site < siteLast) site += 1;
		refreshData(site || 1);
	}

	/**
	 * Set prev page
	 */
	function prevPage() {
		if (site && firstSite && site > firstSite) site -= 1;
		refreshData(site || 1);
	}

	/**
	 * Set page by number
	 * @param {Number} siteAct
	 */
	function setPage(siteAct) {
		siteLast = siteLast || 1;
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

{#if viewSiter}
	<div class="lsc-strankovani">
		<button on:click={prevPage} disabled={site === first}>&larr; {texts['predchozi']}</button>
		{#each siteArr as siteList, i(i)}
			<button
				aria-label="green"
				class="lsc-strankovani-button-site"
				on:click={() => setPage(siteList)}
				disabled={site === siteList}>{siteList}</button
			>
		{/each}
		<button on:click={nextPage} disabled={site === siteLast}>{texts['dalsi']} &rarr;</button>
	</div>
{:else}
	<div class="lsc-strankovani"></div>
{/if}


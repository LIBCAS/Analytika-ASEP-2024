<script>
	export let data;

	import DepartmentDetailStat from '$lib/components/sites/department/DepartmentDetailStat.svelte';

	/** @type {?String} */
	const idUstav = data.oddeleni.idUstav;

	/** @type {?String} */
	const idOddeleni = data.oddeleni.idOddeleni;

	/** @type {?String} */
	const urlOddeleni = data.oddeleni.urlOddeleni;

	/** @type {?String} */
	const nazevOddeleni = data.oddeleni.nazevOddeleni;

	/** @type {?Array<Object<string, string>>} */
	const seznamOddeleni = data.oddeleni.list;
</script>

<svelte:head>
	<title>{nazevOddeleni}</title>
	<meta name="description" content={nazevOddeleni} />
	<meta name="keywords" content={nazevOddeleni} />
</svelte:head>
<DepartmentDetailStat {idUstav} {idOddeleni} {nazevOddeleni} {urlOddeleni} {seznamOddeleni} />

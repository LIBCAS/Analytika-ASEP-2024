<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ucl-m';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav pro českou literaturu AV ČR, v. v. i. (ÚČL) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro českou literaturu AV ČR, v. v. i. (ÚČL) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro českou literaturu AV ČR, v. v. i.,ÚČL,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
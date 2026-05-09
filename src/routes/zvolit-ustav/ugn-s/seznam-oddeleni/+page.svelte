<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ugn-s';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav geoniky AV ČR, v. v. i. (ÚGN) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav geoniky AV ČR, v. v. i. (ÚGN) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav geoniky AV ČR, v. v. i.,ÚGN,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
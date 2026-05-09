<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umg-j';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav molekulární genetiky AV ČR, v. v. i. (ÚMG) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav molekulární genetiky AV ČR, v. v. i. (ÚMG) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav molekulární genetiky AV ČR, v. v. i.,ÚMG,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
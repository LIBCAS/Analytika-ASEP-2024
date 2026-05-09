<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'upt-d';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav přístrojové techniky AV ČR, v. v. i. (ÚPT) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav přístrojové techniky AV ČR, v. v. i. (ÚPT) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav přístrojové techniky AV ČR, v. v. i.,ÚPT,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
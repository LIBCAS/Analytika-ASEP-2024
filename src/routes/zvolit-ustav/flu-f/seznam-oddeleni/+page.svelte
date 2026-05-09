<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'flu-f';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Filosofický ústav AV ČR, v. v. i. (FLÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Filosofický ústav AV ČR, v. v. i. (FLÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Filosofický ústav AV ČR, v. v. i.,FLÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
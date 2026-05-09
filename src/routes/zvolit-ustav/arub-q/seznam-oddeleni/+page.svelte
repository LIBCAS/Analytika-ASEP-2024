<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'arub-q';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Archeologický ústav AV ČR, Brno, v. v. i. (ARÚB) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Archeologický ústav AV ČR, Brno, v. v. i. (ARÚB) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Archeologický ústav AV ČR, Brno, v. v. i.,ARÚB,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'slu-s';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Slovanský ústav AV ČR, v. v. i. (SLÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Slovanský ústav AV ČR, v. v. i. (SLÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Slovanský ústav AV ČR, v. v. i.,SLÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fzu-d';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Fyzikální ústav AV ČR, v. v. i. (FZÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Fyzikální ústav AV ČR, v. v. i. (FZÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Fyzikální ústav AV ČR, v. v. i.,FZÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
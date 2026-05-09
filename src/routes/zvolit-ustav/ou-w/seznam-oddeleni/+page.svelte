<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ou-w';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Orientální ústav AV ČR, v. v. i. (OÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Orientální ústav AV ČR, v. v. i. (OÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Orientální ústav AV ČR, v. v. i.,OÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
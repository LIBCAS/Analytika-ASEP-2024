<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usp-i';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav státu a práva AV ČR, v. v. i. (ÚSP) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav státu a práva AV ČR, v. v. i. (ÚSP) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav státu a práva AV ČR, v. v. i.,ÚSP,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
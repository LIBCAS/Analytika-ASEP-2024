<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'gfu-e';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Geofyzikální ústav AV ČR, v. v. i. (GFÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Geofyzikální ústav AV ČR, v. v. i. (GFÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Geofyzikální ústav AV ČR, v. v. i.,GFÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
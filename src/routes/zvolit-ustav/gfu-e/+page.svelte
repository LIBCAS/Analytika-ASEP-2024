<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'gfu-e';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Geofyzikální ústav AV ČR, v. v. i. (GFÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Geofyzikální ústav AV ČR, v. v. i. (GFÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Geofyzikální ústav AV ČR, v. v. i.,GFÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
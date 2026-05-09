<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'aru-g';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Archeologický ústav AV ČR, Praha, v. v. i. (ARÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Archeologický ústav AV ČR, Praha, v. v. i. (ARÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Archeologický ústav AV ČR, Praha, v. v. i.,ARÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
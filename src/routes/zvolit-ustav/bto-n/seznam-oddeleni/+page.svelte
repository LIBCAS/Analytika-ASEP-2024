<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bto-n';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Biotechnologický ústav AV ČR, v. v. i. (BTÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Biotechnologický ústav AV ČR, v. v. i. (BTÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Biotechnologický ústav AV ČR, v. v. i.,BTÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ugn-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav geoniky AV ČR, v. v. i. (ÚGN)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav geoniky AV ČR, v. v. i. (ÚGN)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav geoniky AV ČR, v. v. i.,ÚGN" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umg-j';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav molekulární genetiky AV ČR, v. v. i. (ÚMG)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav molekulární genetiky AV ČR, v. v. i. (ÚMG)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav molekulární genetiky AV ČR, v. v. i.,ÚMG" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'upt-d';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav přístrojové techniky AV ČR, v. v. i. (ÚPT)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav přístrojové techniky AV ČR, v. v. i. (ÚPT)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav přístrojové techniky AV ČR, v. v. i.,ÚPT" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
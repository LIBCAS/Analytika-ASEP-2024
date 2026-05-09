<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'flu-f';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Filosofický ústav AV ČR, v. v. i. (FLÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Filosofický ústav AV ČR, v. v. i. (FLÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Filosofický ústav AV ČR, v. v. i.,FLÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
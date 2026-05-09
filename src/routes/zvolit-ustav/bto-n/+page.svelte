<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bto-n';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Biotechnologický ústav AV ČR, v. v. i. (BTÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Biotechnologický ústav AV ČR, v. v. i. (BTÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Biotechnologický ústav AV ČR, v. v. i.,BTÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
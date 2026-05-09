<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujc-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav pro jazyk český AV ČR, v. v. i. (ÚJČ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro jazyk český AV ČR, v. v. i. (ÚJČ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro jazyk český AV ČR, v. v. i.,ÚJČ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
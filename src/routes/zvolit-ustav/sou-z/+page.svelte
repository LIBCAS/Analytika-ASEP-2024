<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'sou-z';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Sociologický ústav AV ČR, v. v. i. (SOÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Sociologický ústav AV ČR, v. v. i. (SOÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Sociologický ústav AV ČR, v. v. i.,SOÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uef-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Etnologický ústav AV ČR, v. v. i. (EÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Etnologický ústav AV ČR, v. v. i. (EÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Etnologický ústav AV ČR, v. v. i.,EÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
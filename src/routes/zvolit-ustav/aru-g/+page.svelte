<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'aru-g';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Archeologický ústav AV ČR, Praha, v. v. i. (ARÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Archeologický ústav AV ČR, Praha, v. v. i. (ARÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Archeologický ústav AV ČR, Praha, v. v. i.,ARÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
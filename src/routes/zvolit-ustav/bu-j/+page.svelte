<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bu-j';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Botanický ústav AV ČR, v. v. i. (BÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Botanický ústav AV ČR, v. v. i. (BÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Botanický ústav AV ČR, v. v. i.,BÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
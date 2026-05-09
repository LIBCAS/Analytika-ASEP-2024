<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usp-i';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav státu a práva AV ČR, v. v. i. (ÚSP)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav státu a práva AV ČR, v. v. i. (ÚSP)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav státu a práva AV ČR, v. v. i.,ÚSP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
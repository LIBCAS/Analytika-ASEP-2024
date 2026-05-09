<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ou-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Orientální ústav AV ČR, v. v. i. (OÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Orientální ústav AV ČR, v. v. i. (OÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Orientální ústav AV ČR, v. v. i.,OÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fzu-d';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Fyzikální ústav AV ČR, v. v. i. (FZÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Fyzikální ústav AV ČR, v. v. i. (FZÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Fyzikální ústav AV ČR, v. v. i.,FZÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
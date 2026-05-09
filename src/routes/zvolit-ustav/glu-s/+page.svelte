<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'glu-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Geologický ústav AV ČR, v. v. i. (GLÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Geologický ústav AV ČR, v. v. i. (GLÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Geologický ústav AV ČR, v. v. i.,GLÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
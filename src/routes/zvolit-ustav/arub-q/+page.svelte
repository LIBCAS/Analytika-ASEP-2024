<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'arub-q';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Archeologický ústav AV ČR, Brno, v. v. i. (ARÚB)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Archeologický ústav AV ČR, Brno, v. v. i. (ARÚB)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Archeologický ústav AV ČR, Brno, v. v. i.,ARÚB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
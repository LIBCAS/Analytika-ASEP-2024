<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'slu-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Slovanský ústav AV ČR, v. v. i. (SLÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Slovanský ústav AV ČR, v. v. i. (SLÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Slovanský ústav AV ČR, v. v. i.,SLÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
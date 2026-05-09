<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'asu-r';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Astronomický ústav AV ČR, v. v. i. (ASÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Astronomický ústav AV ČR, v. v. i. (ASÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Astronomický ústav AV ČR, v. v. i.,ASÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
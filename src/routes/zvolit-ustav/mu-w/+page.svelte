<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mu-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Matematický ústav AV ČR, v. v. i. (MÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Matematický ústav AV ČR, v. v. i. (MÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Matematický ústav AV ČR, v. v. i.,MÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
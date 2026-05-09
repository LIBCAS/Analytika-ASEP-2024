<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'psu-e';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Psychologický ústav AV ČR, v. v. i. (PSÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Psychologický ústav AV ČR, v. v. i. (PSÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Psychologický ústav AV ČR, v. v. i.,PSÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
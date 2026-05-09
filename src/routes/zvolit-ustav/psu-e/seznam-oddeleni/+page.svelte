<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'psu-e';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Psychologický ústav AV ČR, v. v. i. (PSÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Psychologický ústav AV ČR, v. v. i. (PSÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Psychologický ústav AV ČR, v. v. i.,PSÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
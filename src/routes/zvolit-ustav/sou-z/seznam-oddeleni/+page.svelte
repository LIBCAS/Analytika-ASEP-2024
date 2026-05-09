<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'sou-z';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Sociologický ústav AV ČR, v. v. i. (SOÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Sociologický ústav AV ČR, v. v. i. (SOÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Sociologický ústav AV ČR, v. v. i.,SOÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
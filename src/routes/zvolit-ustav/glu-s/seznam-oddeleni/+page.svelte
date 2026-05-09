<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'glu-s';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Geologický ústav AV ČR, v. v. i. (GLÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Geologický ústav AV ČR, v. v. i. (GLÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Geologický ústav AV ČR, v. v. i.,GLÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'asu-r';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Astronomický ústav AV ČR, v. v. i. (ASÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Astronomický ústav AV ČR, v. v. i. (ASÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Astronomický ústav AV ČR, v. v. i.,ASÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
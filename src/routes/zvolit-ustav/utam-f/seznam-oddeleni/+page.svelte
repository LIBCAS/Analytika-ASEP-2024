<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utam-f';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav teoretické a aplikované mechaniky AV ČR, v. v. i. (ÚTAM) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav teoretické a aplikované mechaniky AV ČR, v. v. i. (ÚTAM) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav teoretické a aplikované mechaniky AV ČR, v. v. i.,ÚTAM,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
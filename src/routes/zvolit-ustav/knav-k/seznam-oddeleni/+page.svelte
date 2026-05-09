<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'knav-k';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Knihovna AV ČR, v. v. i. (KNAV) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Knihovna AV ČR, v. v. i. (KNAV) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Knihovna AV ČR, v. v. i.,KNAV,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
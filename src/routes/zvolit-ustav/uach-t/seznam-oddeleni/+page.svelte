<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uach-t';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav anorganické chemie AV ČR, v. v. i. (ÚACH) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav anorganické chemie AV ČR, v. v. i. (ÚACH) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav anorganické chemie AV ČR, v. v. i.,ÚACH,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
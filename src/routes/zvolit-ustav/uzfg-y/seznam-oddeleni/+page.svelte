<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uzfg-y';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav živočišné fyziologie a genetiky AV ČR, v. v. i. (ÚŽFG) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav živočišné fyziologie a genetiky AV ČR, v. v. i. (ÚŽFG) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav živočišné fyziologie a genetiky AV ČR, v. v. i.,ÚŽFG,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
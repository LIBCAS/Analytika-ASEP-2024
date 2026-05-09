<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujf-v';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav jaderné fyziky AV ČR, v. v. i. (ÚJF) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav jaderné fyziky AV ČR, v. v. i. (ÚJF) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav jaderné fyziky AV ČR, v. v. i.,ÚJF,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
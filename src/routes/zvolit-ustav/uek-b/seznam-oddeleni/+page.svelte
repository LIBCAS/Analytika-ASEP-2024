<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uek-b';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav výzkumu globální změny AV ČR, v. v. i. (ÚVGZ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav výzkumu globální změny AV ČR, v. v. i. (ÚVGZ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav výzkumu globální změny AV ČR, v. v. i.,ÚVGZ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
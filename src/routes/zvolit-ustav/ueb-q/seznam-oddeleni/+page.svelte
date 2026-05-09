<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ueb-q';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav experimentální botaniky AV ČR, v. v. i. (ÚEB) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav experimentální botaniky AV ČR, v. v. i. (ÚEB) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav experimentální botaniky AV ČR, v. v. i.,ÚEB,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msu-r';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Masarykův ústav AV ČR (od r. 2006 pod Masarykův ústav a Archiv AV ČR, v. v. i.) (MSÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Masarykův ústav AV ČR (od r. 2006 pod Masarykův ústav a Archiv AV ČR, v. v. i.) (MSÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Masarykův ústav AV ČR (od r. 2006 pod Masarykův ústav a Archiv AV ČR, v. v. i.),MSÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
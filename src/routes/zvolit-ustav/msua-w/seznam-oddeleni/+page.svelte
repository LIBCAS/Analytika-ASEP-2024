<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msua-w';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Masarykův ústav a Archiv AV ČR, v. v. i. (MÚA) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Masarykův ústav a Archiv AV ČR, v. v. i. (MÚA) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Masarykův ústav a Archiv AV ČR, v. v. i.,MÚA,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufa-u';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav fyziky atmosféry AV ČR, v. v. i. (ÚFA) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyziky atmosféry AV ČR, v. v. i. (ÚFA) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyziky atmosféry AV ČR, v. v. i.,ÚFA,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'udu-i';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav dějin umění AV ČR, v. v. i. (ÚDU) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav dějin umění AV ČR, v. v. i. (ÚDU) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav dějin umění AV ČR, v. v. i.,ÚDU,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usd-c';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav pro soudobé dějiny AV ČR, v. v. i. (ÚSD) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro soudobé dějiny AV ČR, v. v. i. (ÚSD) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro soudobé dějiny AV ČR, v. v. i.,ÚSD,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
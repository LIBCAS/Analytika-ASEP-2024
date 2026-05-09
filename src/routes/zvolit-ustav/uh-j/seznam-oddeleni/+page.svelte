<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uh-j';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav pro hydrodynamiku AV ČR, v. v. i. (ÚH) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro hydrodynamiku AV ČR, v. v. i. (ÚH) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro hydrodynamiku AV ČR, v. v. i.,ÚH,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
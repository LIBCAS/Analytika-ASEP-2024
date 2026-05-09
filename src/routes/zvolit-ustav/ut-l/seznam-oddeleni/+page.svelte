<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ut-l';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav termomechaniky AV ČR, v. v. i. (ÚT) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav termomechaniky AV ČR, v. v. i. (ÚT) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav termomechaniky AV ČR, v. v. i.,ÚT,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
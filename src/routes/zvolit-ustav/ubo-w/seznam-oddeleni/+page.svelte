<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ubo-w';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav biologie obratlovců AV ČR, v. v. i. (ÚBO) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav biologie obratlovců AV ČR, v. v. i. (ÚBO) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav biologie obratlovců AV ČR, v. v. i.,ÚBO,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
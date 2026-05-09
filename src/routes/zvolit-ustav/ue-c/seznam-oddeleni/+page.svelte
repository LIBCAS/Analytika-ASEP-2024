<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ue-c';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav pro elektrotechniku AV ČR (od r. 2006 pod Ústavem pro termomechaniku AV ČR, v. v. i.) (ÚE) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro elektrotechniku AV ČR (od r. 2006 pod Ústavem pro termomechaniku AV ČR, v. v. i.) (ÚE) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro elektrotechniku AV ČR (od r. 2006 pod Ústavem pro termomechaniku AV ČR, v. v. i.),ÚE,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
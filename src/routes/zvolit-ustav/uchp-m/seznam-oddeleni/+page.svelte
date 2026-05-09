<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uchp-m';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav chemických procesů AV ČR, v. v. i. (ÚCHP) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav chemických procesů AV ČR, v. v. i. (ÚCHP) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav chemických procesů AV ČR, v. v. i.,ÚCHP,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
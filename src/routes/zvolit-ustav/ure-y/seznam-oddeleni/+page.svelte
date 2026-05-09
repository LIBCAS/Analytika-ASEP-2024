<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ure-y';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav fotoniky a elektroniky AV ČR, v. v. i. (ÚFE) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fotoniky a elektroniky AV ČR, v. v. i. (ÚFE) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fotoniky a elektroniky AV ČR, v. v. i.,ÚFE,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
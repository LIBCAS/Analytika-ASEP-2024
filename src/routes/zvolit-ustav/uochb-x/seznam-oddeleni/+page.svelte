<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uochb-x';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav organické chemie a biochemie AV ČR, v. v. i. (ÚOCHB) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav organické chemie a biochemie AV ČR, v. v. i. (ÚOCHB) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav organické chemie a biochemie AV ČR, v. v. i.,ÚOCHB,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
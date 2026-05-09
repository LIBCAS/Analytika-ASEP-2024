<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bc-a';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Biologické centrum AV ČR, v. v. i. (BFÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Biologické centrum AV ČR, v. v. i. (BFÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Biologické centrum AV ČR, v. v. i.,BFÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
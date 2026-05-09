<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mu-w';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Matematický ústav AV ČR, v. v. i. (MÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Matematický ústav AV ČR, v. v. i. (MÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Matematický ústav AV ČR, v. v. i.,MÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
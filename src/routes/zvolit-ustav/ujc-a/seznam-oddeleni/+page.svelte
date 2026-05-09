<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujc-a';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav pro jazyk český AV ČR, v. v. i. (ÚJČ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro jazyk český AV ČR, v. v. i. (ÚJČ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro jazyk český AV ČR, v. v. i.,ÚJČ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
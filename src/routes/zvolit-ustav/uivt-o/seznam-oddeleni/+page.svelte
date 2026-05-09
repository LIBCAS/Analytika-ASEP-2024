<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uivt-o';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav informatiky AV ČR, v. v. i. (ÚI) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav informatiky AV ČR, v. v. i. (ÚI) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav informatiky AV ČR, v. v. i.,ÚI,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
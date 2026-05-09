<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufch-w';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav fyzikální chemie J. Heyrovského AV ČR, v. v. i. (ÚFCH JH) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyzikální chemie J. Heyrovského AV ČR, v. v. i. (ÚFCH JH) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyzikální chemie J. Heyrovského AV ČR, v. v. i.,ÚFCH JH,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mbu-m';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Mikrobiologický ústav AV ČR, v. v. i. (MBÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Mikrobiologický ústav AV ČR, v. v. i. (MBÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Mikrobiologický ústav AV ČR, v. v. i.,MBÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
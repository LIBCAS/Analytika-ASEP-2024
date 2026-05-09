<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uef-s';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Etnologický ústav AV ČR, v. v. i. (EÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Etnologický ústav AV ČR, v. v. i. (EÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Etnologický ústav AV ČR, v. v. i.,EÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
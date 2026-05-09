<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hiu-y';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Historický ústav AV ČR, v. v. i. (HÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Historický ústav AV ČR, v. v. i. (HÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Historický ústav AV ČR, v. v. i.,HÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
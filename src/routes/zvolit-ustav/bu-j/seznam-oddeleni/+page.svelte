<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bu-j';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Botanický ústav AV ČR, v. v. i. (BÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Botanický ústav AV ČR, v. v. i. (BÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Botanický ústav AV ČR, v. v. i.,BÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
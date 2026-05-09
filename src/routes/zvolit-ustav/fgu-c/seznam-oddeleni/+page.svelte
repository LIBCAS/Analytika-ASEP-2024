<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fgu-c';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Fyziologický ústav AV ČR, v. v. i. (FGÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Fyziologický ústav AV ČR, v. v. i. (FGÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Fyziologický ústav AV ČR, v. v. i.,FGÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
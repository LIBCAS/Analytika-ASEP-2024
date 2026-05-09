<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'nhu-n';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ekonomický ústav AV ČR, v. v. i. (EKÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ekonomický ústav AV ČR, v. v. i. (EKÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ekonomický ústav AV ČR, v. v. i.,EKÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bfu-r';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Biofyzikální ústav AV ČR, v. v. i. (BC) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Biofyzikální ústav AV ČR, v. v. i. (BC) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Biofyzikální ústav AV ČR, v. v. i.,BC,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
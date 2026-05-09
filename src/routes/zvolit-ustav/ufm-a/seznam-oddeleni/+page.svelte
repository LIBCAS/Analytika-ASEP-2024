<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufm-a';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav fyziky materiálů AV ČR, v. v. i. (ÚFM) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyziky materiálů AV ČR, v. v. i. (ÚFM) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyziky materiálů AV ČR, v. v. i.,ÚFM,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
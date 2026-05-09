<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'entu-i';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Entomologický ústav AV ČR, v. v. i. (BC od r. 2006) (ENTU) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Entomologický ústav AV ČR, v. v. i. (BC od r. 2006) (ENTU) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Entomologický ústav AV ČR, v. v. i. (BC od r. 2006),ENTU,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
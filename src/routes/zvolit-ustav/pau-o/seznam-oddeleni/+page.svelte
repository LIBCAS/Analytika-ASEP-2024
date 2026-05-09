<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'pau-o';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Parazitologický ústav AV ČR, v. v. i. (BC od r. 2006) (PARU) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Parazitologický ústav AV ČR, v. v. i. (BC od r. 2006) (PARU) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Parazitologický ústav AV ČR, v. v. i. (BC od r. 2006),PARU,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
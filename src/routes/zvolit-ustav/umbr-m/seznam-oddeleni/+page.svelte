<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umbr-m';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav molekulární biologie rostlin AV ČR, v. v. i. (BC od r. 2006) (ÚMBR) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav molekulární biologie rostlin AV ČR, v. v. i. (BC od r. 2006) (ÚMBR) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav molekulární biologie rostlin AV ČR, v. v. i. (BC od r. 2006),ÚMBR,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ssc-a';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Středisko společných činností AV ČR, v. v. i. (SSČ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Středisko společných činností AV ČR, v. v. i. (SSČ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Středisko společných činností AV ČR, v. v. i.,SSČ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
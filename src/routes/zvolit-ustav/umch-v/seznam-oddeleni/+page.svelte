<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umch-v';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav makromolekulární chemie AV ČR, v. v. i. (ÚMCH) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav makromolekulární chemie AV ČR, v. v. i. (ÚMCH) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav makromolekulární chemie AV ČR, v. v. i.,ÚMCH,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
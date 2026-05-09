<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usmh-b';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav struktury a mechaniky hornin AV ČR, v. v. i. (ÚSMH) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav struktury a mechaniky hornin AV ČR, v. v. i. (ÚSMH) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav struktury a mechaniky hornin AV ČR, v. v. i.,ÚSMH,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
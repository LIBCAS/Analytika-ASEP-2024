<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uem-p';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav experimentální medicíny AV ČR, v. v. i. (ÚEM) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav experimentální medicíny AV ČR, v. v. i. (ÚEM) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav experimentální medicíny AV ČR, v. v. i.,ÚEM,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
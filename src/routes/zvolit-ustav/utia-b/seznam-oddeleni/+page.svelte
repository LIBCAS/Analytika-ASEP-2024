<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utia-b';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav teorie informace a automatizace AV ČR, v. v. i. (ÚTIA) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav teorie informace a automatizace AV ČR, v. v. i. (ÚTIA) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav teorie informace a automatizace AV ČR, v. v. i.,ÚTIA,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
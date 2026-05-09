<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'knav-k';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Knihovna AV ČR, v. v. i. (KNAV)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Knihovna AV ČR, v. v. i. (KNAV)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Knihovna AV ČR, v. v. i.,KNAV" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
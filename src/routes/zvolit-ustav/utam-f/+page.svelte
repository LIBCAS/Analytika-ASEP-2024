<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utam-f';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav teoretické a aplikované mechaniky AV ČR, v. v. i. (ÚTAM)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav teoretické a aplikované mechaniky AV ČR, v. v. i. (ÚTAM)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav teoretické a aplikované mechaniky AV ČR, v. v. i.,ÚTAM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
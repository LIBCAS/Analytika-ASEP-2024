<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uach-t';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav anorganické chemie AV ČR, v. v. i. (ÚACH)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav anorganické chemie AV ČR, v. v. i. (ÚACH)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav anorganické chemie AV ČR, v. v. i.,ÚACH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
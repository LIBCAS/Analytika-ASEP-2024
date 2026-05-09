<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uchp-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav chemických procesů AV ČR, v. v. i. (ÚCHP)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav chemických procesů AV ČR, v. v. i. (ÚCHP)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav chemických procesů AV ČR, v. v. i.,ÚCHP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uzfg-y';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav živočišné fyziologie a genetiky AV ČR, v. v. i. (ÚŽFG)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav živočišné fyziologie a genetiky AV ČR, v. v. i. (ÚŽFG)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav živočišné fyziologie a genetiky AV ČR, v. v. i.,ÚŽFG" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
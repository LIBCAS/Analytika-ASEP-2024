<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uiach-o';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav analytické chemie AV ČR, v. v. i. (ÚIACH)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav analytické chemie AV ČR, v. v. i. (ÚIACH)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav analytické chemie AV ČR, v. v. i.,ÚIACH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
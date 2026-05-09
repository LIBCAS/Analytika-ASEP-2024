<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'a-z';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Archiv AV ČR (od r. 2006 pod Masarykův ústav - Archiv AV ČR, v. v. i.) (A-Z)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Archiv AV ČR (od r. 2006 pod Masarykův ústav - Archiv AV ČR, v. v. i.) (A-Z)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Archiv AV ČR (od r. 2006 pod Masarykův ústav - Archiv AV ČR, v. v. i.),A-Z" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
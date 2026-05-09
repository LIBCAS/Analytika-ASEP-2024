<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msu-r';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Masarykův ústav AV ČR (od r. 2006 pod Masarykův ústav a Archiv AV ČR, v. v. i.) (MSÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Masarykův ústav AV ČR (od r. 2006 pod Masarykův ústav a Archiv AV ČR, v. v. i.) (MSÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Masarykův ústav AV ČR (od r. 2006 pod Masarykův ústav a Archiv AV ČR, v. v. i.),MSÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
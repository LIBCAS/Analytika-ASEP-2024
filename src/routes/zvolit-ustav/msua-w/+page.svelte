<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msua-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Masarykův ústav a Archiv AV ČR, v. v. i. (MÚA)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Masarykův ústav a Archiv AV ČR, v. v. i. (MÚA)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Masarykův ústav a Archiv AV ČR, v. v. i.,MÚA" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
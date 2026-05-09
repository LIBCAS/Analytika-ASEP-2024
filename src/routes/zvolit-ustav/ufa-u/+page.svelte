<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufa-u';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav fyziky atmosféry AV ČR, v. v. i. (ÚFA)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyziky atmosféry AV ČR, v. v. i. (ÚFA)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyziky atmosféry AV ČR, v. v. i.,ÚFA" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
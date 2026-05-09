<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ueb-q';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav experimentální botaniky AV ČR, v. v. i. (ÚEB)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav experimentální botaniky AV ČR, v. v. i. (ÚEB)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav experimentální botaniky AV ČR, v. v. i.,ÚEB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
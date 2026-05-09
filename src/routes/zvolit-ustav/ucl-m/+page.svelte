<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ucl-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav pro českou literaturu AV ČR, v. v. i. (ÚČL)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro českou literaturu AV ČR, v. v. i. (ÚČL)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro českou literaturu AV ČR, v. v. i.,ÚČL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
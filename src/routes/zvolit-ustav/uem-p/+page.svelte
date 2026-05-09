<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uem-p';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav experimentální medicíny AV ČR, v. v. i. (ÚEM)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav experimentální medicíny AV ČR, v. v. i. (ÚEM)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav experimentální medicíny AV ČR, v. v. i.,ÚEM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
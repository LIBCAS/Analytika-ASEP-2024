<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ut-l';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav termomechaniky AV ČR, v. v. i. (ÚT)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav termomechaniky AV ČR, v. v. i. (ÚT)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav termomechaniky AV ČR, v. v. i.,ÚT" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
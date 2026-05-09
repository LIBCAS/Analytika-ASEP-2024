<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujf-v';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav jaderné fyziky AV ČR, v. v. i. (ÚJF)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav jaderné fyziky AV ČR, v. v. i. (ÚJF)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav jaderné fyziky AV ČR, v. v. i.,ÚJF" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
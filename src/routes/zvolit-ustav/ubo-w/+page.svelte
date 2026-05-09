<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ubo-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav biologie obratlovců AV ČR, v. v. i. (ÚBO)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav biologie obratlovců AV ČR, v. v. i. (ÚBO)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav biologie obratlovců AV ČR, v. v. i.,ÚBO" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
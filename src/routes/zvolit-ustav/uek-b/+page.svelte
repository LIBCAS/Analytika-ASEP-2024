<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uek-b';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav výzkumu globální změny AV ČR, v. v. i. (ÚVGZ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav výzkumu globální změny AV ČR, v. v. i. (ÚVGZ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav výzkumu globální změny AV ČR, v. v. i.,ÚVGZ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
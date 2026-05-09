<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uivt-o';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav informatiky AV ČR, v. v. i. (ÚI)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav informatiky AV ČR, v. v. i. (ÚI)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav informatiky AV ČR, v. v. i.,ÚI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
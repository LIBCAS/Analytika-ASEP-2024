<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mbu-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Mikrobiologický ústav AV ČR, v. v. i. (MBÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Mikrobiologický ústav AV ČR, v. v. i. (MBÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Mikrobiologický ústav AV ČR, v. v. i.,MBÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
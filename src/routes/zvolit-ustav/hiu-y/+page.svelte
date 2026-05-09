<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hiu-y';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Historický ústav AV ČR, v. v. i. (HÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Historický ústav AV ČR, v. v. i. (HÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Historický ústav AV ČR, v. v. i.,HÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
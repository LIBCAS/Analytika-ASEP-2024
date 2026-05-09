<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usd-c';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav pro soudobé dějiny AV ČR, v. v. i. (ÚSD)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro soudobé dějiny AV ČR, v. v. i. (ÚSD)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro soudobé dějiny AV ČR, v. v. i.,ÚSD" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
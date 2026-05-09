<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'udu-i';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav dějin umění AV ČR, v. v. i. (ÚDU)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav dějin umění AV ČR, v. v. i. (ÚDU)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav dějin umění AV ČR, v. v. i.,ÚDU" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
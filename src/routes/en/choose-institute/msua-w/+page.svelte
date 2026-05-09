<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msua-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Masaryk Institute and Archives of the CAS (MIA)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Masaryk Institute and Archives of the CAS (MIA)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Masaryk Institute and Archives of the CAS,MIA" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msua-w';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Masaryk Institute and Archives of the CAS (MIA) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Masaryk Institute and Archives of the CAS (MIA) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Masaryk Institute and Archives of the CAS,MIA,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
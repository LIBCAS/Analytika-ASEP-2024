<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'msu-r';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Masaryk Institute of the CAS (Masaryk Institute - Archives of the CAS, since 2006) (MSÚ)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Masaryk Institute of the CAS (Masaryk Institute - Archives of the CAS, since 2006) (MSÚ)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Masaryk Institute of the CAS (Masaryk Institute - Archives of the CAS, since 2006),MSÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
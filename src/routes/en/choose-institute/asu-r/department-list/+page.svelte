<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'asu-r';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Astronomical Institute of the CAS (ASI) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Astronomical Institute of the CAS (ASI) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Astronomical Institute of the CAS,ASI,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
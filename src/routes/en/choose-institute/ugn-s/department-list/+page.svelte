<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ugn-s';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Geonics of the CAS (IGN) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Geonics of the CAS (IGN) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Geonics of the CAS,IGN,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
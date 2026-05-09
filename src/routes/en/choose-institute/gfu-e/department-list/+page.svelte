<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'gfu-e';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Geophysics of the CAS (IG) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Geophysics of the CAS (IG) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Geophysics of the CAS,IG,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
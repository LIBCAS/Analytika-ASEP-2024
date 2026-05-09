<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uh-j';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Hydrodynamics of the CAS (IHD) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Hydrodynamics of the CAS (IHD) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Hydrodynamics of the CAS,IHD,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufm-a';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Physics of Materials of the CAS (IPM) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Physics of Materials of the CAS (IPM) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Physics of Materials of the CAS,IPM,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
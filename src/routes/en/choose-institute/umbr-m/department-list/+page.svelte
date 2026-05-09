<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umbr-m';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Plant Molecular Biology of the CAS (BC since 2006) (ÚMBR) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Plant Molecular Biology of the CAS (BC since 2006) (ÚMBR) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Plant Molecular Biology of the CAS (BC since 2006),ÚMBR,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
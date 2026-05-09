<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umg-j';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Molecular Genetics of the CAS (IMG) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Molecular Genetics of the CAS (IMG) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Molecular Genetics of the CAS,IMG,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
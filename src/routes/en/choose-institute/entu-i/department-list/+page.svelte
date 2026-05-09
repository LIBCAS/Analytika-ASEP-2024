<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'entu-i';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Entomology of the CAS (BC since 2006) (ENTU) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Entomology of the CAS (BC since 2006) (ENTU) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Entomology of the CAS (BC since 2006),ENTU,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
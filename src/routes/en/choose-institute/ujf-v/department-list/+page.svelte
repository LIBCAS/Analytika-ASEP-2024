<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujf-v';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Nuclear Physics Institute of the CAS (NPI) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Nuclear Physics Institute of the CAS (NPI) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Nuclear Physics Institute of the CAS,NPI,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
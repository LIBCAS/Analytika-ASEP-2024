<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujc-a';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of the Czech Language of the CAS (ICLA) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of the Czech Language of the CAS (ICLA) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of the Czech Language of the CAS,ICLA,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
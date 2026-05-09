<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ucl-m';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Czech Literature of the CAS (ICL) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Czech Literature of the CAS (ICL) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Czech Literature of the CAS,ICL,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
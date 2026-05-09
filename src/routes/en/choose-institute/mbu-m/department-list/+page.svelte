<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mbu-m';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Microbiology of the CAS (IMB) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Microbiology of the CAS (IMB) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Microbiology of the CAS,IMB,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
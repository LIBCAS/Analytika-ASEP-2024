<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'upt-d';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Scientific Instruments of the CAS (ISI) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Scientific Instruments of the CAS (ISI) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Scientific Instruments of the CAS,ISI,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
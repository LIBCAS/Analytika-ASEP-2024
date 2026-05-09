<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'glu-s';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Geology of the CAS (IGL) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Geology of the CAS (IGL) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Geology of the CAS,IGL,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
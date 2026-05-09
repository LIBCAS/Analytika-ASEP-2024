<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'slu-s';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Slavonic Studies of the CAS (ISS) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Slavonic Studies of the CAS (ISS) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Slavonic Studies of the CAS,ISS,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
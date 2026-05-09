<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'flu-f';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Philosophy of the CAS (IPL) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Philosophy of the CAS (IPL) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Philosophy of the CAS,IPL,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
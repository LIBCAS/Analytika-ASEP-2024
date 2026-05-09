<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufp-v';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Plasma Physics of the CAS (IPP) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Plasma Physics of the CAS (IPP) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Plasma Physics of the CAS,IPP,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
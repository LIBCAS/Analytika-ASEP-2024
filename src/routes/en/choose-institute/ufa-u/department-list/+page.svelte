<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufa-u';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Atmospheric Physics of the CAS (IAP) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Atmospheric Physics of the CAS (IAP) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Atmospheric Physics of the CAS,IAP,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ou-w';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Oriental Institute of the CAS (OI) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Oriental Institute of the CAS (OI) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Oriental Institute of the CAS,OI,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'upb-h';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Soil Biology of the CAS (BC since 2006) (ÚPB) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Soil Biology of the CAS (BC since 2006) (ÚPB) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Soil Biology of the CAS (BC since 2006),ÚPB,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
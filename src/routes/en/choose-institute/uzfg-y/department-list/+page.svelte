<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uzfg-y';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Animal Physiology and Genetics of the CAS (IAPG) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Animal Physiology and Genetics of the CAS (IAPG) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Animal Physiology and Genetics of the CAS,IAPG,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
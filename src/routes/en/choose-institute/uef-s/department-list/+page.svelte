<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uef-s';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Ethnology of the CAS (IE) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Ethnology of the CAS (IE) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Ethnology of the CAS,IE,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
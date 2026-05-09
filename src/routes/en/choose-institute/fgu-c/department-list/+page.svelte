<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fgu-c';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Physiology of the CAS (IPHYS) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Physiology of the CAS (IPHYS) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Physiology of the CAS,IPHYS,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
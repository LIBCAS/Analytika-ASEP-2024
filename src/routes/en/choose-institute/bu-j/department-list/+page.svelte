<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bu-j';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Botany of the CAS (IBOT) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Botany of the CAS (IBOT) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Botany of the CAS,IBOT,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
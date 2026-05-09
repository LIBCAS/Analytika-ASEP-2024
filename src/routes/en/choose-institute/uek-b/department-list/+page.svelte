<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uek-b';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Global Change Research Institute of the CAS (GCRI) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Global Change Research Institute of the CAS (GCRI) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Global Change Research Institute of the CAS,GCRI,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
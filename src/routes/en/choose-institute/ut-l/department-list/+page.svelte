<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ut-l';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Thermomechanics of the CAS (IT) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Thermomechanics of the CAS (IT) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Thermomechanics of the CAS,IT,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'psu-e';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Psychology of the CAS (IPS) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Psychology of the CAS (IPS) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Psychology of the CAS,IPS,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'aru-g';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Archaeology of the CAS, Prague (IAR) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Archaeology of the CAS, Prague (IAR) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Archaeology of the CAS, Prague,IAR,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
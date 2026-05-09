<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ure-y';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Photonics and Electronics of the CAS (IPE) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Photonics and Electronics of the CAS (IPE) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Photonics and Electronics of the CAS,IPE,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
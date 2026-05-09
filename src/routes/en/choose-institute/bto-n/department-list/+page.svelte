<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bto-n';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Biotechnology of the CAS (IBT) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Biotechnology of the CAS (IBT) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Biotechnology of the CAS,IBT,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
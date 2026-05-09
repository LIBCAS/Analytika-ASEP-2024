<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usmh-b';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Rock Structure and Mechanics of the CAS (IRSM) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Rock Structure and Mechanics of the CAS (IRSM) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Rock Structure and Mechanics of the CAS,IRSM,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'knav-k';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Library of the CAS (Library) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Library of the CAS (Library) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Library of the CAS,Library,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
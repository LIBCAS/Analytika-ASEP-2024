<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'pau-o';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Parasitology of the CAS (BC since 2006) (PARU) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Parasitology of the CAS (BC since 2006) (PARU) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Parasitology of the CAS (BC since 2006),PARU,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
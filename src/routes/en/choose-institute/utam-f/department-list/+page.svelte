<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utam-f';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Theoretical and Applied Mechanics of the CAS (ITAM) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Theoretical and Applied Mechanics of the CAS (ITAM) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Theoretical and Applied Mechanics of the CAS,ITAM,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
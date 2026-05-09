<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bc-a';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Biology Centre of the CAS (BC) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Biology Centre of the CAS (BC) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Biology Centre of the CAS,BC,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
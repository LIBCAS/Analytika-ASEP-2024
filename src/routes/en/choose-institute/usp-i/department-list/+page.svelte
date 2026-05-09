<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usp-i';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of State and Law of the CAS (ISL) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of State and Law of the CAS (ISL) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of State and Law of the CAS,ISL,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
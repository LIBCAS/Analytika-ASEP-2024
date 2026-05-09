<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'sou-z';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Sociology of the CAS (IS) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Sociology of the CAS (IS) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Sociology of the CAS,IS,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
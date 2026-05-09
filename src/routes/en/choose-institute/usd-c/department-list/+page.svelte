<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usd-c';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute for Contemporary History of the CAS (ICH) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute for Contemporary History of the CAS (ICH) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute for Contemporary History of the CAS,ICH,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
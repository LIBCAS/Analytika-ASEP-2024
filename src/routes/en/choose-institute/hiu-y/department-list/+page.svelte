<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hiu-y';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of History of the CAS (IH) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of History of the CAS (IH) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of History of the CAS,IH,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
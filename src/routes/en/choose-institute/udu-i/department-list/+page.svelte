<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'udu-i';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Art History of the CAS (IAH) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Art History of the CAS (IAH) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Art History of the CAS,IAH,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uiach-o';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Analytical Chemistry of the CAS (IAC) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Analytical Chemistry of the CAS (IAC) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Analytical Chemistry of the CAS,IAC,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
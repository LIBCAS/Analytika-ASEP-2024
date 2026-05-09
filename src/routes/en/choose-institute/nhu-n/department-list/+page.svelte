<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'nhu-n';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Economics Institute of the CAS (EI) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Economics Institute of the CAS (EI) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Economics Institute of the CAS,EI,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
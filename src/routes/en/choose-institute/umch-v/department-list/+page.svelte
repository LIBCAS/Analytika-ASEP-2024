<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umch-v';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Macromolecular Chemistry of the CAS (IMC) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Macromolecular Chemistry of the CAS (IMC) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Macromolecular Chemistry of the CAS,IMC,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
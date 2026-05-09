<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uach-t';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Inorganic Chemistry of the CAS (IIC) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Inorganic Chemistry of the CAS (IIC) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Inorganic Chemistry of the CAS,IIC,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
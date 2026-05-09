<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umg-j';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Molecular Genetics of the CAS (IMG)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Molecular Genetics of the CAS (IMG)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Molecular Genetics of the CAS,IMG" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
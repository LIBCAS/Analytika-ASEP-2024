<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uach-t';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Inorganic Chemistry of the CAS (IIC)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Inorganic Chemistry of the CAS (IIC)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Inorganic Chemistry of the CAS,IIC" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
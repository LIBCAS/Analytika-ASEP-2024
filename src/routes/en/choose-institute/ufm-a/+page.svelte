<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufm-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Physics of Materials of the CAS (IPM)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Physics of Materials of the CAS (IPM)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Physics of Materials of the CAS,IPM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
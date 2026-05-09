<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fzu-d';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Physics of the CAS (IP)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Physics of the CAS (IP)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Physics of the CAS,IP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
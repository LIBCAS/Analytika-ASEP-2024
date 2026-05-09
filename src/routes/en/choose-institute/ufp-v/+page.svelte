<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufp-v';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Plasma Physics of the CAS (IPP)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Plasma Physics of the CAS (IPP)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Plasma Physics of the CAS,IPP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
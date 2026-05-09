<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufa-u';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Atmospheric Physics of the CAS (IAP)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Atmospheric Physics of the CAS (IAP)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Atmospheric Physics of the CAS,IAP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
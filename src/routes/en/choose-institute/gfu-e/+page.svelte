<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'gfu-e';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Geophysics of the CAS (IG)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Geophysics of the CAS (IG)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Geophysics of the CAS,IG" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uh-j';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Hydrodynamics of the CAS (IHD)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Hydrodynamics of the CAS (IHD)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Hydrodynamics of the CAS,IHD" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'slchpl-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Joint Laboratory of Solid State Chemistry of the CAS (UP and CAS, merged with the Institute of Macromolecular Chemistry of the CAS, since 2004) (SLCHPL)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Joint Laboratory of Solid State Chemistry of the CAS (UP and CAS, merged with the Institute of Macromolecular Chemistry of the CAS, since 2004) (SLCHPL)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Joint Laboratory of Solid State Chemistry of the CAS (UP and CAS, merged with the Institute of Macromolecular Chemistry of the CAS, since 2004),SLCHPL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
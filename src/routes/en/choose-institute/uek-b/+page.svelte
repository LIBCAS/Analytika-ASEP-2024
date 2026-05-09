<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uek-b';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Global Change Research Institute of the CAS (GCRI)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Global Change Research Institute of the CAS (GCRI)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Global Change Research Institute of the CAS,GCRI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'upt-d';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Scientific Instruments of the CAS (ISI)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Scientific Instruments of the CAS (ISI)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Scientific Instruments of the CAS,ISI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
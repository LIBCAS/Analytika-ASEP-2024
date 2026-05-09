<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'aru-g';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Archaeology of the CAS, Prague (IAR)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Archaeology of the CAS, Prague (IAR)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Archaeology of the CAS, Prague,IAR" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ut-l';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Thermomechanics of the CAS (IT)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Thermomechanics of the CAS (IT)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Thermomechanics of the CAS,IT" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
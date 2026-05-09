<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ugn-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Geonics of the CAS (IGN)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Geonics of the CAS (IGN)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Geonics of the CAS,IGN" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
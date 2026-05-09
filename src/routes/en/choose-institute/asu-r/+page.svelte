<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'asu-r';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Astronomical Institute of the CAS (ASI)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Astronomical Institute of the CAS (ASI)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Astronomical Institute of the CAS,ASI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
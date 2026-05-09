<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'glu-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Geology of the CAS (IGL)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Geology of the CAS (IGL)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Geology of the CAS,IGL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
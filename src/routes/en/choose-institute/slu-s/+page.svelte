<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'slu-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Slavonic Studies of the CAS (ISS)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Slavonic Studies of the CAS (ISS)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Slavonic Studies of the CAS,ISS" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
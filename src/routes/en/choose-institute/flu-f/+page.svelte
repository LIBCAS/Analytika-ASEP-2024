<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'flu-f';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Philosophy of the CAS (IPL)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Philosophy of the CAS (IPL)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Philosophy of the CAS,IPL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
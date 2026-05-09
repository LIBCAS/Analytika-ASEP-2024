<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bto-n';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Biotechnology of the CAS (IBT)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Biotechnology of the CAS (IBT)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Biotechnology of the CAS,IBT" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
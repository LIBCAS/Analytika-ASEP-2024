<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mbu-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Microbiology of the CAS (IMB)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Microbiology of the CAS (IMB)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Microbiology of the CAS,IMB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
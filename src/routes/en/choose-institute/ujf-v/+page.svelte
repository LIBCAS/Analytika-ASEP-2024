<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujf-v';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Nuclear Physics Institute of the CAS (NPI)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Nuclear Physics Institute of the CAS (NPI)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Nuclear Physics Institute of the CAS,NPI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'psu-e';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Psychology of the CAS (IPS)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Psychology of the CAS (IPS)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Psychology of the CAS,IPS" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
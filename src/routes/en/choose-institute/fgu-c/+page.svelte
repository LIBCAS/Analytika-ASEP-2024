<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fgu-c';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Physiology of the CAS (IPHYS)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Physiology of the CAS (IPHYS)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Physiology of the CAS,IPHYS" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
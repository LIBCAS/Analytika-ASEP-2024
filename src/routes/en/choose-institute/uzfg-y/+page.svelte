<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uzfg-y';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Animal Physiology and Genetics of the CAS (IAPG)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Animal Physiology and Genetics of the CAS (IAPG)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Animal Physiology and Genetics of the CAS,IAPG" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
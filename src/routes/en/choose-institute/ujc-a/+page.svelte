<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ujc-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of the Czech Language of the CAS (ICLA)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of the Czech Language of the CAS (ICLA)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of the Czech Language of the CAS,ICLA" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
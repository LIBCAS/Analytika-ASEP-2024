<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ucl-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Czech Literature of the CAS (ICL)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Czech Literature of the CAS (ICL)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Czech Literature of the CAS,ICL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uef-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Ethnology of the CAS (IE)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Ethnology of the CAS (IE)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Ethnology of the CAS,IE" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
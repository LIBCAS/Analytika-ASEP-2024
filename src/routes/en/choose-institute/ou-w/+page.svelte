<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ou-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Oriental Institute of the CAS (OI)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Oriental Institute of the CAS (OI)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Oriental Institute of the CAS,OI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
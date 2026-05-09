<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mu-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Mathematics of the CAS (IM)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Mathematics of the CAS (IM)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Mathematics of the CAS,IM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
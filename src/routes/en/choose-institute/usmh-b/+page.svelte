<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usmh-b';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Rock Structure and Mechanics of the CAS (IRSM)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Rock Structure and Mechanics of the CAS (IRSM)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Rock Structure and Mechanics of the CAS,IRSM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
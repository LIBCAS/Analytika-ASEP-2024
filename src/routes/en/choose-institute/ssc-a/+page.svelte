<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ssc-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Centre of Administration and Operations of the CAS ()</title>
    <meta name="description" content="ASEP Analytics of the CAS - Centre of Administration and Operations of the CAS ()" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Centre of Administration and Operations of the CAS," />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
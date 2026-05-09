<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hbu-z';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Hydrobiology of the CAS (BC since 2006) (HBÚ)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Hydrobiology of the CAS (BC since 2006) (HBÚ)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Hydrobiology of the CAS (BC since 2006),HBÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
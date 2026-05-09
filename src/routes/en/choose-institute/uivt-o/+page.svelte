<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uivt-o';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Computer Science of the CAS (ICS)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Computer Science of the CAS (ICS)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Computer Science of the CAS,ICS" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
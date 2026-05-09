<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'nhu-n';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Economics Institute of the CAS (EI)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Economics Institute of the CAS (EI)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Economics Institute of the CAS,EI" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
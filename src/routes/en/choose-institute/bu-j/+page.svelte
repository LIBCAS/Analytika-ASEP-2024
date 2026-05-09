<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bu-j';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Botany of the CAS (IBOT)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Botany of the CAS (IBOT)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Botany of the CAS,IBOT" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
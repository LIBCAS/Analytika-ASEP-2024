<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uiach-o';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Analytical Chemistry of the CAS (IAC)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Analytical Chemistry of the CAS (IAC)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Analytical Chemistry of the CAS,IAC" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
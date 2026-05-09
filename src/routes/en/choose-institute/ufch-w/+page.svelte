<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufch-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>J. Heyrovsky Institute of Physical Chemistry of the CAS (JH IPC)</title>
    <meta name="description" content="ASEP Analytics of the CAS - J. Heyrovsky Institute of Physical Chemistry of the CAS (JH IPC)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,J. Heyrovsky Institute of Physical Chemistry of the CAS,JH IPC" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
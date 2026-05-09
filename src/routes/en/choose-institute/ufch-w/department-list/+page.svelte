<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufch-w';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>J. Heyrovsky Institute of Physical Chemistry of the CAS (JH IPC) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - J. Heyrovsky Institute of Physical Chemistry of the CAS (JH IPC) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,J. Heyrovsky Institute of Physical Chemistry of the CAS,JH IPC,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
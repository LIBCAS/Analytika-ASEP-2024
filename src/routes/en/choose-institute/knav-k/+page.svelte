<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'knav-k';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Library of the CAS (Library)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Library of the CAS (Library)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Library of the CAS,Library" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
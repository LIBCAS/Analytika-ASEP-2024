<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bc-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Biology Centre of the CAS (BC)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Biology Centre of the CAS (BC)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Biology Centre of the CAS,BC" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
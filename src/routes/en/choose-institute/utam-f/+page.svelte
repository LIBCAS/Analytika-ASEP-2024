<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utam-f';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Theoretical and Applied Mechanics of the CAS (ITAM)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Theoretical and Applied Mechanics of the CAS (ITAM)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Theoretical and Applied Mechanics of the CAS,ITAM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
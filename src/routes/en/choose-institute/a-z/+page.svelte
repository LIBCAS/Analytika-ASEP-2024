<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'a-z';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Archives of the CAS (Masaryk Institute - Archives of the CAS, since 2006) (A-Z)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Archives of the CAS (Masaryk Institute - Archives of the CAS, since 2006) (A-Z)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Archives of the CAS (Masaryk Institute - Archives of the CAS, since 2006),A-Z" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
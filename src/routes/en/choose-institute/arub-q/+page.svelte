<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'arub-q';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Archaeology of the CAS, Brno (IARB)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Archaeology of the CAS, Brno (IARB)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Archaeology of the CAS, Brno,IARB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
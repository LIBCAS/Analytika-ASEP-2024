<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'mu-w';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Mathematics of the CAS (IM) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Mathematics of the CAS (IM) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Mathematics of the CAS,IM,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
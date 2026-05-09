<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uivt-o';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Computer Science of the CAS (ICS) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Computer Science of the CAS (ICS) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Computer Science of the CAS,ICS,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
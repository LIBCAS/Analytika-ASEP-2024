<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uchp-m';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Chemical Process Fundamentals of the CAS (ICPF) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Chemical Process Fundamentals of the CAS (ICPF) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Chemical Process Fundamentals of the CAS,ICPF,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
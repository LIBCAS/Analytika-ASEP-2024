<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uochb-x';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Organic Chemistry and Biochemistry of the CAS (IOCB) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Organic Chemistry and Biochemistry of the CAS (IOCB) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Organic Chemistry and Biochemistry of the CAS,IOCB,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uochb-x';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Organic Chemistry and Biochemistry of the CAS (IOCB)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Organic Chemistry and Biochemistry of the CAS (IOCB)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Organic Chemistry and Biochemistry of the CAS,IOCB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
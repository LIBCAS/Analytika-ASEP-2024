<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uchp-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Chemical Process Fundamentals of the CAS (ICPF)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Chemical Process Fundamentals of the CAS (ICPF)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Chemical Process Fundamentals of the CAS,ICPF" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usp-i';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of State and Law of the CAS (ISL)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of State and Law of the CAS (ISL)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of State and Law of the CAS,ISL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'udu-i';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Art History of the CAS (IAH)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Art History of the CAS (IAH)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Art History of the CAS,IAH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
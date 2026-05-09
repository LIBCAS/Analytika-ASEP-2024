<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umch-v';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Macromolecular Chemistry of the CAS (IMC)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Macromolecular Chemistry of the CAS (IMC)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Macromolecular Chemistry of the CAS,IMC" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
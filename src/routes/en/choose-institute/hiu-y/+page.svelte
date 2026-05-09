<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hiu-y';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of History of the CAS (IH)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of History of the CAS (IH)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of History of the CAS,IH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
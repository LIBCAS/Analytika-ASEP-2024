<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ure-y';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Photonics and Electronics of the CAS (IPE)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Photonics and Electronics of the CAS (IPE)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Photonics and Electronics of the CAS,IPE" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
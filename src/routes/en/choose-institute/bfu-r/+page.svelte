<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bfu-r';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Biophysics of the CAS (IBP)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Biophysics of the CAS (IBP)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Biophysics of the CAS,IBP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
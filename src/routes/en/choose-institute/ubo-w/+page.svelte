<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ubo-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Vertebrate Biology of the CAS (IVB)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Vertebrate Biology of the CAS (IVB)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Vertebrate Biology of the CAS,IVB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
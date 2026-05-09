<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uem-p';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Experimental Medicine of the CAS (IEM)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Experimental Medicine of the CAS (IEM)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Experimental Medicine of the CAS,IEM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
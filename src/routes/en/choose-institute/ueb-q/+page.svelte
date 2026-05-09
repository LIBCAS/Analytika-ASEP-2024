<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ueb-q';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Experimental Botany of the CAS (IEB)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Experimental Botany of the CAS (IEB)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Experimental Botany of the CAS,IEB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
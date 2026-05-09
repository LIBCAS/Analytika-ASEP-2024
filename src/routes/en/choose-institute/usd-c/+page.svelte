<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usd-c';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute for Contemporary History of the CAS (ICH)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute for Contemporary History of the CAS (ICH)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute for Contemporary History of the CAS,ICH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
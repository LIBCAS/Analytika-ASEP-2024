<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utia-b';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Information Theory and Automation of the CAS (UTIA)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Information Theory and Automation of the CAS (UTIA)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Information Theory and Automation of the CAS,UTIA" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
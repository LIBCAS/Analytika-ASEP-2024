<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'sou-z';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Institute of Sociology of the CAS (IS)</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Sociology of the CAS (IS)" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Sociology of the CAS,IS" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
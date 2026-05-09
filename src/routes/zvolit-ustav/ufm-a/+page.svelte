<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufm-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav fyziky materiálů AV ČR, v. v. i. (ÚFM)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyziky materiálů AV ČR, v. v. i. (ÚFM)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyziky materiálů AV ČR, v. v. i.,ÚFM" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
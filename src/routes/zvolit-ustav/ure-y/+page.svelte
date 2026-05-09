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
    <title>Ústav fotoniky a elektroniky AV ČR, v. v. i. (ÚFE)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fotoniky a elektroniky AV ČR, v. v. i. (ÚFE)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fotoniky a elektroniky AV ČR, v. v. i.,ÚFE" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
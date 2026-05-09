<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'usmh-b';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav struktury a mechaniky hornin AV ČR, v. v. i. (ÚSMH)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav struktury a mechaniky hornin AV ČR, v. v. i. (ÚSMH)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav struktury a mechaniky hornin AV ČR, v. v. i.,ÚSMH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bc-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Biologické centrum AV ČR, v. v. i. (BFÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Biologické centrum AV ČR, v. v. i. (BFÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Biologické centrum AV ČR, v. v. i.,BFÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
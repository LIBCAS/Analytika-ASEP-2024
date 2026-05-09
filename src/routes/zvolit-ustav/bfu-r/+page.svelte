<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bfu-r';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Biofyzikální ústav AV ČR, v. v. i. (BC)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Biofyzikální ústav AV ČR, v. v. i. (BC)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Biofyzikální ústav AV ČR, v. v. i.,BC" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
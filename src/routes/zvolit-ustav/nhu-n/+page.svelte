<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'nhu-n';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ekonomický ústav AV ČR, v. v. i. (EKÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ekonomický ústav AV ČR, v. v. i. (EKÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ekonomický ústav AV ČR, v. v. i.,EKÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
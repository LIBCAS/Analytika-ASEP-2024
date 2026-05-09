<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'fgu-c';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Fyziologický ústav AV ČR, v. v. i. (FGÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Fyziologický ústav AV ČR, v. v. i. (FGÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Fyziologický ústav AV ČR, v. v. i.,FGÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
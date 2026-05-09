<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uh-j';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav pro hydrodynamiku AV ČR, v. v. i. (ÚH)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro hydrodynamiku AV ČR, v. v. i. (ÚH)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro hydrodynamiku AV ČR, v. v. i.,ÚH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
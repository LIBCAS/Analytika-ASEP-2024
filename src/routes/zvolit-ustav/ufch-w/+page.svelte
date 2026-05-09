<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufch-w';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav fyzikální chemie J. Heyrovského AV ČR, v. v. i. (ÚFCH JH)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyzikální chemie J. Heyrovského AV ČR, v. v. i. (ÚFCH JH)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyzikální chemie J. Heyrovského AV ČR, v. v. i.,ÚFCH JH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
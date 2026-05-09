<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umch-v';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav makromolekulární chemie AV ČR, v. v. i. (ÚMCH)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav makromolekulární chemie AV ČR, v. v. i. (ÚMCH)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav makromolekulární chemie AV ČR, v. v. i.,ÚMCH" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
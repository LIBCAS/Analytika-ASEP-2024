<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uochb-x';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav organické chemie a biochemie AV ČR, v. v. i. (ÚOCHB)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav organické chemie a biochemie AV ČR, v. v. i. (ÚOCHB)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav organické chemie a biochemie AV ČR, v. v. i.,ÚOCHB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
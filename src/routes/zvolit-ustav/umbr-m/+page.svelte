<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'umbr-m';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav molekulární biologie rostlin AV ČR, v. v. i. (BC od r. 2006) (ÚMBR)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav molekulární biologie rostlin AV ČR, v. v. i. (BC od r. 2006) (ÚMBR)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav molekulární biologie rostlin AV ČR, v. v. i. (BC od r. 2006),ÚMBR" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
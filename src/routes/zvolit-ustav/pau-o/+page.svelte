<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'pau-o';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Parazitologický ústav AV ČR, v. v. i. (BC od r. 2006) (PARU)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Parazitologický ústav AV ČR, v. v. i. (BC od r. 2006) (PARU)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Parazitologický ústav AV ČR, v. v. i. (BC od r. 2006),PARU" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
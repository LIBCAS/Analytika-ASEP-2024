<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hbu-z';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Hydrobiologický ústav, AV ČR, v. v. i. (BC od r. 2006) (HBÚ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Hydrobiologický ústav, AV ČR, v. v. i. (BC od r. 2006) (HBÚ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Hydrobiologický ústav, AV ČR, v. v. i. (BC od r. 2006),HBÚ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
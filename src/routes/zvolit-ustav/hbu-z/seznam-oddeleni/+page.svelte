<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'hbu-z';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Hydrobiologický ústav, AV ČR, v. v. i. (BC od r. 2006) (HBÚ) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Hydrobiologický ústav, AV ČR, v. v. i. (BC od r. 2006) (HBÚ) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Hydrobiologický ústav, AV ČR, v. v. i. (BC od r. 2006),HBÚ,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
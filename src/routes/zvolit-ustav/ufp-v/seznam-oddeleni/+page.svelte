<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufp-v';
    const akceUstav = 'seznam-oddeleni';
    </script>
    <svelte:head>
    <title>Ústav fyziky plazmatu AV ČR, v. v. i. (ÚFP) - department list</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyziky plazmatu AV ČR, v. v. i. (ÚFP) - department list" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyziky plazmatu AV ČR, v. v. i.,ÚFP,department list" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
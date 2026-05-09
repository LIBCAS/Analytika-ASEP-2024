<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ufp-v';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav fyziky plazmatu AV ČR, v. v. i. (ÚFP)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav fyziky plazmatu AV ČR, v. v. i. (ÚFP)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav fyziky plazmatu AV ČR, v. v. i.,ÚFP" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
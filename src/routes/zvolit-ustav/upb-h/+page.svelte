<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'upb-h';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav půdní biologie AV ČR, v. v. i. (BC od r. 2006) (ÚPB)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav půdní biologie AV ČR, v. v. i. (BC od r. 2006) (ÚPB)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav půdní biologie AV ČR, v. v. i. (BC od r. 2006),ÚPB" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
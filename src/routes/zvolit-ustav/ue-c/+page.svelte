<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ue-c';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav pro elektrotechniku AV ČR (od r. 2006 pod Ústavem pro termomechaniku AV ČR, v. v. i.) (ÚE)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav pro elektrotechniku AV ČR (od r. 2006 pod Ústavem pro termomechaniku AV ČR, v. v. i.) (ÚE)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav pro elektrotechniku AV ČR (od r. 2006 pod Ústavem pro termomechaniku AV ČR, v. v. i.),ÚE" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'slchpl-s';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Společná laboratoř chemie pevných látek AV ČR (UP a AV ČR, od r. 2003 pod UMCH-V) (SLCHPL)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Společná laboratoř chemie pevných látek AV ČR (UP a AV ČR, od r. 2003 pod UMCH-V) (SLCHPL)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Společná laboratoř chemie pevných látek AV ČR (UP a AV ČR, od r. 2003 pod UMCH-V),SLCHPL" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
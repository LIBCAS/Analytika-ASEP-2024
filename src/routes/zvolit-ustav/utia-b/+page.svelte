<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'utia-b';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Ústav teorie informace a automatizace AV ČR, v. v. i. (ÚTIA)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Ústav teorie informace a automatizace AV ČR, v. v. i. (ÚTIA)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Ústav teorie informace a automatizace AV ČR, v. v. i.,ÚTIA" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
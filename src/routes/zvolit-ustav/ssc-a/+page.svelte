<script>
    // institute - one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ssc-a';
    const akceUstav = 'ustav';
    </script>
    <svelte:head>
    <title>Středisko společných činností AV ČR, v. v. i. (SSČ)</title>
    <meta name="description" content="Analytika ASEP AV ČR - Středisko společných činností AV ČR, v. v. i. (SSČ)" />
    <meta name="keywords" content="Analytika ASEP AV ČR,Středisko společných činností AV ČR, v. v. i.,SSČ" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
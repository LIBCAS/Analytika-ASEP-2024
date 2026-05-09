<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ubo-w';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Vertebrate Biology of the CAS (IVB) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Vertebrate Biology of the CAS (IVB) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Vertebrate Biology of the CAS,IVB,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
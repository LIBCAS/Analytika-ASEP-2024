<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'uem-p';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Experimental Medicine of the CAS (IEM) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Experimental Medicine of the CAS (IEM) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Experimental Medicine of the CAS,IEM,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
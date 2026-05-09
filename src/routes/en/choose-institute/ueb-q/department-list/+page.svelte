<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'ueb-q';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Experimental Botany of the CAS (IEB) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Experimental Botany of the CAS (IEB) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Experimental Botany of the CAS,IEB,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
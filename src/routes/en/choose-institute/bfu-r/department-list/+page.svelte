<script>
    // department one template
    import UstavGen from '$lib/components/sites/institute/UstavGen.svelte';
    /**
    * @type {string}
    */
    const idUstavDetail = 'bfu-r';
    const akceUstav = 'department-list';
    </script>
    <svelte:head>
    <title>Institute of Biophysics of the CAS (IBP) - seznam oddělení</title>
    <meta name="description" content="ASEP Analytics of the CAS - Institute of Biophysics of the CAS (IBP) - seznam oddělení" />
    <meta name="keywords" content="ASEP Analytics of the CAS,Institute of Biophysics of the CAS,IBP,seznam oddělení" />
    </svelte:head>
    <UstavGen {idUstavDetail} {akceUstav} />
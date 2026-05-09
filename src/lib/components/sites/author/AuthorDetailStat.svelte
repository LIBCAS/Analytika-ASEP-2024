<script>
    /** @type  {?string} */
    export let idUstavDetail;

    /** @type {?Object}*/
    // export let data;

    /** @type  {?string} */
    let idAutor = null;

    /** @type  {?string} */
    let idUstav = null;

    // components
    import Leftmenu from '$lib/components/sites/author/Leftmenu.svelte';
    import MainHeading from '$lib/components/sites/lib/MainHeading.svelte';
    import Breadcrumb from '$lib/components/sites/lib/Breadcrumb.svelte';
    import FormBase from '$lib/components/sites/forms/FormBase.svelte';

    // stores
    import {loadLevel} from '$lib/stores/loadLevel';
    import {authorLeftMenu} from '$lib/stores/authorLeftMenu.js';
    import {institutes} from '$lib/stores/institutes.js';
    import {authors} from '$lib/stores/authors.js';
    import {leftMenuSelected} from '$lib/stores/leftMenuSelected.js';
    import {shortcuts} from '$lib/stores/shortcuts';
    import {language} from '$lib/stores/language';

    // utils
    import {authorRoute} from '$lib/utils/jsloader/authorRoute';
    import {AuthorInfoArlData} from '$lib/utils/author/AuthorInfoArlData';
    import {getInformationInstitute} from '$utils/institute/getInformationInstitute.js';
    import {s} from '$lib/utils/serverUrl';
    import {t} from '$lib/utils/translate';

    import settings from '$lib/settings';

    /** @type  {string} */
    let endtext = '',
        level2 = 'autor',
        nadpisStranky = '',
        nadpisStrankyText = '',
        nadpisForm = '',
        napovedaMenu = '',
        leftMenuBaseUrl = '',
        ustavText = '';

    /** @type  {?Object} */
    let dataFormBase = null;

    /** @type  {boolean} */
    let viewFormBase = false,
        innerHeading = true;

    /** @type  {?Object<string, string>} */
    let ida;

    $: if ($loadLevel > 1 && !idAutor) {
        if (
            typeof $shortcuts.autor !== 'undefined' &&
            $shortcuts.autor !== null &&
            $shortcuts.ustav !== null &&
            $shortcuts.ustav === idUstavDetail
        ) {
            idAutor = $shortcuts.autor;
            idUstav = $shortcuts.ustav;

            /** @type {Object<string, string>} */
            const infoUstav = getInformationInstitute($shortcuts.ustav, $institutes); // ???
            ustavText = infoUstav.zkratka;
        }
    }

    /**
     * Easy routing for authors block
     * @param {?CustomEvent<{ idmenu: string }>} event
     * @param {?string} nadpisFormHashtag
     */
    function easyRouteAuthor(event = null, nadpisFormHashtag = null) {
        viewFormBase = false;
        let nadpisFormHashtagAutor = '';
        if (event && event.detail.idmenu) {
            const reg = RegExp('(.*)#([^/]*)/(.*)', 'g');
            nadpisFormHashtagAutor = '#' + event.detail.idmenu.replace(reg, '$2');
            nadpisFormHashtagAutor = nadpisFormHashtagAutor.replace(/\/.*/, '');
            nadpisFormHashtag = '#' + event.detail.idmenu.replace(reg, '$3');
        }

        if (typeof $authorLeftMenu === 'undefined') {
            return false;
        }
        if (typeof typeof $authorLeftMenu?.valMenu === 'undefined') {
            return false;
        }
        if (nadpisFormHashtag === null) {
            if (typeof window !== 'undefined') {
                nadpisFormHashtag = window.location.hash;
                nadpisFormHashtag = nadpisFormHashtag.replace(/^#?[^/]*\/?/, '');
            }
        } else if (nadpisFormHashtagAutor && nadpisFormHashtag) {
            let urlLs = nadpisFormHashtagAutor + '/' + nadpisFormHashtag.substring(1);
            window.location.hash = urlLs;
        }
        if (nadpisFormHashtag === '') {
            if (
                typeof $authorLeftMenu.valMenu[0][0] !== 'undefined' &&
                typeof $authorLeftMenu.valMenu[0][0][2] !== 'undefined'
            ) {
                nadpisFormHashtag = $authorLeftMenu.valMenu[0][0][2];
                $leftMenuSelected = nadpisFormHashtag;
                nadpisForm = $authorLeftMenu.valMenu[0][0][2];
                napovedaMenu = $authorLeftMenu.valMenu[0][0][3];
            }
        }

        nadpisStranky = endtext = nadpisStrankyText = '';
        const outDataAuthorMenu = authorRoute(
            nadpisFormHashtag,
            s('server.forms_arl'),
            settings.menu_autor,
            $language
        );
        outDataAuthorMenu.then((dataValLs) => {
            dataFormBase = dataValLs;
            if (idUstav && $authors) {
                viewFormBase = true;
                nadpisStranky = endtext = nadpisStrankyText = '';
            }
        });

        if ($authorLeftMenu && Object.keys($authorLeftMenu.valMenu).length > 0) {
            for (let keyMain in $authorLeftMenu.valMenu) {
                for (let key in $authorLeftMenu.valMenu[keyMain]) {
                    let arrVal = $authorLeftMenu.valMenu[keyMain][key];
                    const strVal = arrVal[2].replace(/^#/, '')
                    const strNad = (nadpisFormHashtag) ? nadpisFormHashtag.replace(/^#/, '') : '';
                    if (strNad === strVal && strNad) {
                        nadpisForm = arrVal[1];
                        $leftMenuSelected = arrVal[2];
                        napovedaMenu = arrVal[3];
                    }
                }
            }
        }
    }

    $: if ($authorLeftMenu && typeof $authorLeftMenu.valMenu !== 'undefined' && idUstav) {
        easyRouteAuthor();
    }

    /**
     * Get author detail information
     * @param {CustomEvent} event
     */
    const handleArlData = (event) => {
        try {
            const objAuthorInfo = new AuthorInfoArlData(event.detail.arlData);
            if (objAuthorInfo) {
                nadpisStranky = endtext = objAuthorInfo.init('authorName');
                const authorVariants = objAuthorInfo.init('authorVariants');
                nadpisStrankyText = authorVariants
                    ? t('site.authors.dalsi_varianty_jmena', $language, 'u') + ': ' + authorVariants
                    : '';
                ida = objAuthorInfo.getIda();
            }
        } catch (error) {
            // ignore intentionally
            void error;
            nadpisStranky = endtext = '';
        }
    };
</script>

<main id="site">
    <section class="l-head-container-2 l-head-container-2--site"></section>
    <div class="l-main">
        <div class="l-site-dva-bloky">
            <Leftmenu {leftMenuBaseUrl} {idAutor} on:startroute={easyRouteAuthor}/>
            <div class="l-site-dva-bloky__item">
                <Breadcrumb {endtext} {level2} {ustavText}/>
                <MainHeading {nadpisStranky} {nadpisStrankyText} {innerHeading} {ida} {napovedaMenu} {nadpisForm}/>
                <div id="l-site-grid" class="l-site-grid">
                    {#if nadpisForm}
                        <div class="c-form-nadpis">
                            <h3>{nadpisForm}</h3>
                        </div>
                    {/if}
                    {#if viewFormBase && idAutor && dataFormBase}
                        <FormBase
                                {nadpisForm}
                                {idUstavDetail}
                                {idAutor}
                                {dataFormBase}
                                on:setArlData={handleArlData}
                        />
                    {/if}
                </div>
            </div>
        </div>
    </div>
</main>

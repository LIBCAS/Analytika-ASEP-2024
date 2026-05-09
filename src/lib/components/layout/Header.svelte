<script>
	// sveltekit
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// utils
	import { t } from '$lib/utils/translate';
	import { m } from '$lib/utils/menuUrl';
	import { mainMenu } from '$lib/utils/menu/mainMenu.js';
	import { mainMenuClose } from '$lib/utils/menu/mainMenuClose.js';

	// stores
	import { language } from '$lib/stores/language';
	import { urlWeb } from '$lib/stores/urlWeb';
	import { urlChanged } from '$lib/stores/urlChanged';

	// static
	import ImgLogo from '$lib/static/images/logo.png';
	import ImgLogoEn from '$lib/static/images/logo-en.png';
	import ImgVlajkaEn from '$lib/static/images/svg/gb.svg';
	import ImgVlajkaCs from '$lib/static/images/svg/cs.svg';
	import ImgMenuSvg from '$lib/static/images/svg/menu.svg';
	import ImgCloseSvg from '$lib/static/images/svg/close.svg';

	// base settings
	import settings from '$lib/settings';
	let base = settings.domena;

	// components
	import AbolishedInstitutes from '$lib/components/layout/header/AbolishedInstitutes.svelte';

	onMount(() => {
		mainMenu();
		mainMenu('oblasti');
	});

	$: if ($urlChanged && browser) {
		mainMenuClose($urlChanged);
	}

	/**
	 * @param {string} str
	 */
	function setDataAtribut(str) {
		let str1 = str.trim();
		str1 = str1.replace(/[^a-zA-Z0-9-]+/g, '');
		return str1;
	}

	/**
	 * @param {string} url
	 * @param {string} language
	 */
	function isActiveUstav(url, language) {
		void language;
		let regex = /zvolit-ustav/gi;
		let regexEn = /choose-institute/gi;
		if (url.match(regex) || url.match(regexEn)) {
			return true;
		}
		return false;
	}

	/**
	 * Check active url region
	 * @param {string} url
	 * @param {string} language
	 */
	let q = '';
	const handleSearch = () => {
		let url = base + m('menu.search', $language);
		if ($language === 'en') {
			url = base + '/en' + m('menu.search', $language);
		}
		window.location.href = `${url}?q=${encodeURIComponent(q)}`;
	};
</script>

<header id="header" class="no-print">
		<div class="l-nav-main-link">
			<a class="screen-reader-text skip-link" href="#content" title="{t('obecne.obsah_webu', $language)}" data-sveltekit-reload>{t('obecne.obsah_webu', $language)}</a>
			<a class="screen-reader-text skip-link" href="{base}{m('menu.home', $language)}#institution" title="{t('obecne.vybrat_ustav', $language)}" data-sveltekit-reload>{t('obecne.vybrat_ustav', $language)}</a>
			<a class="screen-reader-text skip-link" href="#menu" title="{t('obecne.hlavni_menu', $language)}" data-sveltekit-reload>{t('obecne.hlavni_menu', $language)}</a>
			<a class="screen-reader-text skip-link" href="#search-sysno" title="{t('obecne.vyhledavani', $language)}" data-sveltekit-reload>{t('obecne.vyhledavani', $language)}</a>
		</div>
	<div class="l-head-fix">
		<div class="l-head-container-1">
			<div class="l-head-container-1__logo">
				<a
					href="{base}{m('menu.home', $language)}"
					title={t('header.homepage.title', $language)}
					data-sveltekit-reload
				>
					{#if $language === 'en'}
						<img
							src={ImgLogoEn}
							alt={t('header.img.logo', $language)}
							width="228"
							height="287"
							loading="lazy"
						/>
					{:else}
						<img
							src={ImgLogo}
							alt={t('header.img.logo', $language)}
							width="228"
							height="287"
							loading="lazy"
						/>
					{/if}
				</a>
			</div>
			<div class="l-head-container-1__hledej">
				<form
					id="search-sysno"
					method="get"
					target="_blank"
					action="https://asep-analytika.lib.cas.cz/hledat"
					class="l-head-menu-list__form"
					rel="external"
					on:submit|preventDefault={() => handleSearch()}
				>
					<div class="s-in-text">
						<input
							type="text"
							placeholder={t('menu.vyhledavac.title', $language)}
							name="q"
							bind:value={q}
						/>
					</div>
				</form>
			</div>
			<div
				class={settings.v7test === false
					? 'l-head-container-1__login'
					: 'l-head-container-1__login l-head-container-1__login--disable'}
			></div>
			<div class="l-head-container-1__mutace" data-sveltekit-reload>
				<div>
					{#if $language === 'en'}
						<a
							dir="ltr"
							rel="alternate"
							href="{base}{m('menu.home', 'cs')}"
							hreflang="cs-cs"
							lang="cs-CS"
							title="Česká verze"
							aria-label="Česká verze stránek"
						>
							<img
								src={ImgVlajkaCs}
								class="l-head-mutace-img"
								alt="Vlajka ČR"
								width="64"
								height="33"
							/>
						</a>
						<a
							dir="ltr"
							rel="alternate"
							href="{base}{m('menu.home', 'cs')}"
							hreflang="en-GB"
							lang="en-GB"
							title="Česká verze"
							aria-label="Česká verze stránek">CS</a
						>
					{:else if $language === 'sk'}
						<a
							dir="ltr"
							rel="alternate"
							href="{base}{m('menu.home', 'cs')}"
							hreflang="cs-cs"
							lang="cs-CS"
							title="Česká verze"
							aria-label="Česká verze stránek"
						>
							<img
								src={ImgVlajkaEn}
								class="l-head-mutace-img"
								alt="Vlajka ČR"
								width="64"
								height="33"
							/>
						</a>
						<a
							dir="ltr"
							rel="alternate"
							href="{base}{m('menu.home', 'cs')}"
							hreflang="en-GB"
							lang="en-GB"
							title="English version"
							aria-label="English version">English</a
						>
					{:else}
						<a
							dir="ltr"
							rel="alternate"
							href="{base}{m('menu.home', 'en')}"
							hreflang="en-GB"
							lang="en-GB"
							title="English version"
							aria-label="English version"
						>
							<img
								src={ImgVlajkaEn}
								class="l-head-mutace-img"
								alt="english"
								width="64"
								height="33"
							/>
						</a>
						<a
							dir="ltr"
							rel="alternate"
							href="{base}{m('menu.home', 'en')}"
							hreflang="en-GB"
							lang="en-GB"
							title="English version"
							aria-label="English version">ENG</a
						>
					{/if}
				</div>
			</div>
			<nav
				id="menu"
				class="l-head-container-1__navigace"
				aria-label="Hlavní navigace"
			>
				<input type="checkbox" class="l-head-menu-burger-input" />
				<img src={ImgMenuSvg} class="l-head-menu-burger-img" alt="" />
				<img src={ImgCloseSvg} class="l-head-menu-burger-close" alt="" />
				<div
					class={settings.v7test === false
						? 'l-head-menu-list l-head-menu-list3'
						: 'l-head-menu-list l-head-menu-list3 l-head-menu-list--slim'}
				>
					<ul class="l-head-menu-list__left no-js" role="menubar">
						<li
							role="menuitem"
							data-item-menu={setDataAtribut(m('menu.home'))}
							class:active={$urlWeb === m('menu.home', $language)}
						>
							<a
								href="{base}{m('menu.home', $language)}"
								aria-current="page"
								aria-label={t('menu.home.title', $language)}
								data-site="home"
								data-sveltekit-reload
							>
								{t('menu.home', $language)}
							</a>
						</li>
						<li
							role="menuitem"
							class="l-head-menu-list__submenu-out"
							data-item-menu={setDataAtribut(m('menu.onlineKatalog'))}
							class:active={$urlWeb === m('menu.onlineKatalog', $language)}
						>
							<a
								href={m('menu.onlineKatalog', $language)}
								aria-label={t('menu.onlineKatalog.title', $language)}
								target="_blank"
							>
								{t('menu.onlineKatalog', $language)}
							</a>
						</li>
						<li
							role="menuitem"
							class="l-head-menu-list__submenu"
							aria-label={t('menu.zvolitUstav.title', $language)}
							data-item-menu={setDataAtribut(m('menu.zvolitUstav'))}
							class:active-label={isActiveUstav($urlWeb, $language)}
						>
							<input type="checkbox" id="l-head-menu-list-submenu2" />
							<label for="l-head-menu-list-submenu2" class="l-head-menu-list-mobile_item">
								{t('menu.zvolitUstav', $language)}
							</label>
							<div class="l-head-menu-list-mega_box">
								<div>
									<AbolishedInstitutes />
								</div>
							</div>
						</li>
						<li
							role="menuitem"
							class=""
							data-item-menu={setDataAtribut(m('menu.napoveda'))}
							class:active={$urlWeb === m('menu.napoveda', $language)}
						>
							<a
								href="{base}{m('menu.napoveda', $language)}"
								aria-label={t('menu.napoveda.title', $language)}
							>
								{t('menu.napoveda', $language)}
								<span style="display:none">- {$urlWeb} - {m('menu.napoveda', $language)}</span>
							</a>
						</li>
						<li
							role="menuitem"
							class="l-head-menu-list__submenu-out"
							aria-label={t('menu.asepInfo.title', $language)}
							data-item-menu={setDataAtribut(m('menu.oDatabazi'))}
							class:active={$urlWeb === m('menu.oDatabazi', $language)}
						>
							<a href="https://asep-portal.lib.cas.cz/" target="_blank">
								{t('menu.asepInfo', $language)}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</header>

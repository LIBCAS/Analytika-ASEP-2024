<script>
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/DefLeftMenu.js').DefLeftMenu} DefLeftMenu */

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// props...
	/** @type  {string} */
	export let leftMenuBaseUrl = '';
	/** @type  {?string} */
	export let idAutor = '';

	// stores
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';
	import { authorLeftMenu } from '$lib/stores/authorLeftMenu.js';
	import { leftMenuSelected } from '$lib/stores/leftMenuSelected.js';
	import { urlChanged } from '$lib/stores/urlChanged';
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utils
	import { getLeftMenu } from '$lib/utils/leftMenu';
	import { scrollTop } from '$lib/utils/scrollTop';
	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	let base = settings.domena;

	// default values
	/**
	 * @typedef {Object} MenuItem
	 * @property {boolean} active
	 * @property {string} nazev
	 * @property {string} url
	 * @property {string} id
	 */
	/** @type {?Array<Array<MenuItem>>} */
	let arrValMenu = [];

	/** @type {?Array<?string>} */
	let arrNadpisy = [];

	/** @type {?Array<Array<MenuItem>>} */
	let arrInstituteMenuValues = [],
		/** @type {?Array<?string>} */
		arrNadpisyUstav = [];

	$: if ($urlChanged) {
		if (typeof window !== 'undefined') {
			$leftMenuSelected = window.location.hash;
		}
	}

	let baseUrlAutor = base;
	$: baseUrlAutor =
		base + m('menu.zvolitUstav', $language) + $shortcuts.ustav + m('autor', $language);

	$: if (baseUrlAutor[baseUrlAutor.length - 1] === '/') {
		baseUrlAutor = baseUrlAutor.substring(0, baseUrlAutor.length - 1);
	}

	/**
	 * Active tab - activation li tag
	 * @param {string} id
	 */
	const handleClickVysledek = (id) => {
		if (!arrValMenu) {
			return false;
		}
		try {
			for (let i in arrValMenu) {
				if (arrValMenu[i] || Array.isArray(arrValMenu[i])) {
					for (let j in arrValMenu[i]) {
						if (typeof arrValMenu[i][j] === 'object' && arrValMenu[i][j] !== null) {
							if (arrValMenu[i][j].id == id) {
								arrValMenu[i][j].active = true;
							} else {
								arrValMenu[i][j].active = false;
							}
						}
					}
				}
			}
		} catch (error) {
			// ignore intentionally
			void error;
		}
		scrollTop();
	};

	$: out = getLeftMenu(
		$authorLeftMenu,
		$leftMenuSelected,
		leftMenuBaseUrl,
		baseUrlAutor,
		idAutor?.toString()
	);

	let baseUrlUstav = null;
	/** @type {?DefLeftMenu} */
	let outUstav = null;
	$: if ($shortcuts.ustav && $instituteLeftMenu) {
		baseUrlUstav = base + m('menu.zvolitUstav', $language) + $shortcuts.ustav;
		outUstav = getLeftMenu($instituteLeftMenu, '', leftMenuBaseUrl, baseUrlUstav) || null;
	}
	$: if (out && out.valMenu && out.nadpisy) {
		arrValMenu = out.valMenu;
		arrNadpisy = out.nadpisy;
	}

	$: if (outUstav && outUstav.valMenu && outUstav.nadpisy) {
		arrInstituteMenuValues = outUstav.valMenu;
		arrNadpisyUstav = outUstav.nadpisy;
	}

	/**
	 * Call parent function "easyRoute"
	 * @param {string} id
	 */
	function startRouteChild(id) {
		dispatch('startroute', {
			idmenu: id
		});
	}
</script>

<nav class="l-site-dva-bloky__left">
	{#if arrNadpisy && idAutor}
		<div class="l-menu-highlight">
			{#each arrNadpisy as inadpisItem, i (i)}
				<h3>{inadpisItem}</h3>
				<ul>
					{#if arrValMenu && arrValMenu[i]}
						{#each arrValMenu[i] as menuItem, i (i)}
							<li
								class:active-leve-menu={menuItem.active}
								class:active-leve-menu78={menuItem.active}
							>
								<a
									id={menuItem.id}
									href={menuItem.url}
									on:click={() => startRouteChild(menuItem.url)}
									on:click|preventDefault={() => handleClickVysledek(menuItem.id)}
									>{menuItem.nazev}</a
								>
							</li>
						{/each}
					{/if}
				</ul>
			{/each}
		</div>
	{/if}
	{#if arrNadpisyUstav}
		<div class="l-leve-menu-submenu">
			{#each arrNadpisyUstav as inadpisItem, i (i)}
				<h3>{inadpisItem}</h3>
				<ul>
					{#if arrInstituteMenuValues && arrInstituteMenuValues[i]}
						{#each arrInstituteMenuValues[i] as menuItem, i (i)}
							{#if menuItem.url}
								<li>
									<a id={menuItem.id} href={menuItem.url}>{menuItem.nazev}</a>
								</li>
							{/if}
						{/each}
					{/if}
				</ul>
			{/each}
		</div>
	{/if}
</nav>








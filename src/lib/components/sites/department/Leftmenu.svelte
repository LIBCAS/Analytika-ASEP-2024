<script>
	/** @typedef {import('$lib/utils/arl/jsdocDefinition/DefLeftMenu.js').DefLeftMenu} DefLeftMenuDepartment */

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let leftMenuBaseUrl = '';
	export let akceUstav = '';

	// stores
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';
	import { departmentLeftMenu } from '$lib/stores/departmentLeftMenu.js';
	import { leftMenuSelected } from '$lib/stores/leftMenuSelected.js';
	import { urlChanged } from '$lib/stores/urlChanged';
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utils
	import { getLeftMenu } from '$lib/utils/leftMenu';
	import { scrollTop } from '$lib/utils/scrollTop';
	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	// import { DefLeftMenu } from '$utils/arl/jsdocDefinition/DefLeftMenu.js';
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
	let arrHeadings = [];

	/** @type {?Array<Array<MenuItem>>} */
	let arrInstituteMenuValues = [];

	/** @type {?Array<?string>} */
	let arrInstutute = [];

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
				for (let j in arrValMenu[i]) {
					if (arrValMenu[i][j].id == id) {
						arrValMenu[i][j].active = true;
					} else {
						arrValMenu[i][j].active = false;
					}
				}
			}
		} catch (err) {
			// ignore intentionally
			void err;
		}
		scrollTop();
	};

	// default values
	$: if ($urlChanged) {
		if (akceUstav && akceUstav !== 'ustav') {
			$leftMenuSelected = '#' + akceUstav;
		} else if (akceUstav == 'ustav') {
			if (typeof window !== 'undefined') {
				$leftMenuSelected = window.location.hash;
			}
		}
	}

	$: baseUrlOddeleni =
		base +
		m('menu.zvolitUstav', $language) +
		$shortcuts.ustav +
		m('oddeleni.detail', $language) +
		$shortcuts.oddeleniUrl;

	// build-rebuild left menu
	$: out = getLeftMenu($departmentLeftMenu, $leftMenuSelected, leftMenuBaseUrl, baseUrlOddeleni);

	let baseUrlUstav = null;

	/** @type {?DefLeftMenuDepartment} */
	let outUstav = null;
	$: if ($shortcuts.ustav && $instituteLeftMenu) {
		baseUrlUstav = base + m('menu.zvolitUstav', $language) + $shortcuts.ustav;
		outUstav = getLeftMenu($instituteLeftMenu, '', leftMenuBaseUrl, baseUrlUstav) || null;
	}

	$: if (out && out.valMenu && out.nadpisy) {
		arrValMenu = out.valMenu;
		arrHeadings = out.nadpisy;
	}

	$: if (outUstav && outUstav.valMenu && outUstav.nadpisy) {
		arrInstituteMenuValues = outUstav.valMenu;
		arrInstutute = outUstav.nadpisy;
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
	{#if arrHeadings}
		<div class="l-menu-highlight">
			{#each arrHeadings as headingItem, i (i)}
				<h3>{headingItem}</h3>
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

	{#if arrInstutute}
		<div class="l-leve-menu-submenu">
			{#each arrInstutute as instituteItem, i (i)}
				<h3>{instituteItem}</h3>
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


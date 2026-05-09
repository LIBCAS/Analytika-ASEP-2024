<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let leftMenuBaseUrl = '';
	export let akceUstav = '';

	// stores
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';
	import { leftMenuSelected } from '$lib/stores/leftMenuSelected.js';
	import { urlChanged } from '$lib/stores/urlChanged';
	import { language } from '$lib/stores/language';
	import { shortcuts } from '$lib/stores/shortcuts';

	// utils
	import { getLeftMenu } from '$lib/utils/leftMenu';
	import { scrollTop } from '$lib/utils/scrollTop';
	import { m } from '$lib/utils/menuUrl';
	import settings from '$lib/settings';
	const base = settings.domena;

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

	/**
	 * Active left menu after user use
	 * @param {string} id
	 */
	const handleClickResult = (id) => {
		if (!arrValMenu || !Array.isArray(arrValMenu)) {
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

	// vychozi hodnoty
	$: if ($urlChanged) {
		if (akceUstav && akceUstav !== 'ustav') {
			$leftMenuSelected = '#' + akceUstav;
		} else if (akceUstav == 'ustav') {
			if (typeof window !== 'undefined') {
				$leftMenuSelected = window.location.hash;
			}
		}
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

	$: baseUrlUstav = base + m('menu.zvolitUstav', $language) + $shortcuts.ustav;

	$: out = getLeftMenu($instituteLeftMenu, $leftMenuSelected, leftMenuBaseUrl, baseUrlUstav);
	$: if (out) {
		arrValMenu = out.valMenu;
		arrHeadings = out.nadpisy;
	}
</script>

<nav class="l-site-dva-bloky__left">
	{#if arrHeadings && arrValMenu}
		{#each arrHeadings as headingItem, i (i)}
			<h3>{headingItem}</h3>
			<ul>
				{#each arrValMenu[i] as menuItem, i (i)}
					<li class:active-leve-menu={menuItem.active}>
						{#if !menuItem.url && menuItem.active}
							<span id={typeof menuItem.id === 'string' ? menuItem.id : ''}>{menuItem.nazev}</span>
						{:else if menuItem.url}
							<a
								id={typeof menuItem.id === 'string' ? menuItem.id : ''}
								href={menuItem.url}
								on:click={() => startRouteChild(menuItem.url)}
								on:click|preventDefault={() => handleClickResult(menuItem.id)}
								>{menuItem.nazev}</a
							>
						{/if}
					</li>
				{/each}
			</ul>
		{/each}
	{/if}
</nav>
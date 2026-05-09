<script>
	import { m } from '$lib/utils/menuUrl';
	import { language } from '$lib/stores/language';
	import { institutes } from '$lib/stores/institutes.js';

	import { urlWeb } from '$lib/stores/urlWeb';
	import settings from '$lib/settings';
	let base = settings.domena;

	/**
	 * Set active class
	 * @param {string} url
	 * @param {string} menuItemKey
	 * @return {boolean}
	 */
	function isActive(url, menuItemKey) {
		return url === menuItemKey;
	}
</script>

<ul data-site="graf">
	{#each $institutes as item (item[0])}
		{#if item[2] !== '4'}
			<li
				class:active2={$urlWeb === m('menu.zvolitUstav', $language) + '' + item[0]}
				class:active={isActive($urlWeb, m('menu.zvolitUstav', $language) + '' + item[0] + '/')}
			>
				<a href="{base}{m('menu.zvolitUstav', $language)}{item[0]}/" tabindex="4"
					><span>{item[1]}</span></a
				>
			</li>
		{/if}
	{/each}
</ul>

<ul data-site="graf" class="s-linka">
	{#each $institutes as item (item[0])}
		{#if item[2] === '4'}
			<li
				class:active2={$urlWeb === m('menu.zvolitUstav', $language) + '' + item[0]}
				class:active={isActive($urlWeb, m('menu.zvolitUstav', $language) + '' + item[0] + '/')}
			>
				<a href="{base}{m('menu.zvolitUstav', $language)}{item[0]}/"><span>{item[1]}</span></a>
			</li>
		{/if}
	{/each}
</ul>

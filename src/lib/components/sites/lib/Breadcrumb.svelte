<script>
	/**
	 * Breadcrumb navigation component.
	 * Displays the path to the current page as a list of items.
	 */

	// exports
	export let level2 = 'us';
	export let level3 = '';

	// texts
	export let endtext = '';
	export let ustavText = '';

	// stores
	import { shortcuts } from '$lib/stores/shortcuts';
	import { language } from '$lib/stores/language';
	import { loadLevel } from '$lib/stores/loadLevel';
	import { instituteLeftMenu } from '$lib/stores/instituteLeftMenu.js';

	// utils
	import { t } from '$lib/utils/translate';
	import { m } from '$lib/utils/menuUrl';

	// settings web
	import settings from '$lib/settings';
	let base = settings.domena;

	// setting deplatment list link (odkaz na seznam oddělení nastavení)
	let linkDepartment = '';
	let nameDepartment = '';
	$: if (level2 === 'us-oddeleni' && $instituteLeftMenu && $instituteLeftMenu.valMenu && !linkDepartment) {
		const oddelStr = settings.breadcrumbDepartment;
		if (oddelStr) {
			labelArrDepartment: for (let i = 0; i < $instituteLeftMenu.valMenu.length; i++) {
				let arrItem = $instituteLeftMenu.valMenu[i];
				for (let j = 0; j < arrItem.length; j++) {
					const item = arrItem[j];
					if (item[0] === oddelStr) {
						linkDepartment = item[2];
						nameDepartment = item[1];
						break labelArrDepartment;
					}
				}
			}
		}
	}

	let linkAuthor = '';
	let nameAuthor = '';
	$: if (level2 === 'autor' && $instituteLeftMenu && $instituteLeftMenu.valMenu && !linkAuthor) {
		const authorStr = settings.breadcrumbAuthor;
		if (authorStr) {
			labelArrAuthor: for (let i = 0; i < $instituteLeftMenu.valMenu.length; i++) {
				let arrItem = $instituteLeftMenu.valMenu[i];
				for (let j = 0; j < arrItem.length; j++) {
					const item = arrItem[j];
					if (item[0] === authorStr) {
						linkAuthor = item[2];
						nameAuthor = item[1];
						break labelArrAuthor;
					}
				}
			}
		}
	}
</script>

{#if $loadLevel > 1}
	<ul class="breadcrumb">
		<li>
			<a
				href="{base}{m('menu.home', $language)}"
				aria-label={t('menu.home.title', $language)}
				data-site="home"
			>
				{t('menu.home', $language, 'u')}
			</a>
		</li>
		{#if level2 === 'vo'}
			<li>
				{#if level3 !== '' || endtext !== ''}
					<a href="{base}{m('vedni_oblast.1', $language)}"
						>{t('obecne.vedni_oblasti', $language, 'u')}</a
					>
				{:else}
					<span>{t('obecne.vedni_oblasti', $language, 'u')}</span>
				{/if}
			</li>
		{/if}

		{#if level2 === 'us-oddeleni'}
			<li>
				<a href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}">{ustavText}</a>
			</li>
			{#if linkDepartment}
				<li>
					<a href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}{linkDepartment}"
						>{nameDepartment}</a
					>
				</li>
			{/if}
		{/if}

		{#if level2 === 'autor'}
			<li>
				<a href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}">{ustavText}</a>
			</li>
			{#if linkAuthor}
				<li>
					<a href="{base}{m('menu.zvolitUstav', $language)}{$shortcuts.ustav}{linkAuthor}"
						>{nameAuthor}</a
					>
				</li>
			{/if}
		{/if}

		{#if endtext !== ''}
			<li>
				<span>{endtext}</span>
			</li>
		{/if}
	</ul>
{/if}



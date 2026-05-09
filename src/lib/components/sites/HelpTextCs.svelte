<script>
	// stores
	import { language } from '$lib/stores/language';
	// utilitis
	import { t } from '$lib/utils/translate';
	// images
	import ImgH1 from '$lib/static/images/napoveda/napoveda-1-cs.webp';
	import ImgH2 from '$lib/static/images/napoveda/napoveda-2-cs.webp';
	import ImgH3 from '$lib/static/images/napoveda/napoveda-3-cs.webp';
	import ImgH4 from '$lib/static/images/napoveda/napoveda-4-cs.webp';
	import ImgH5 from '$lib/static/images/napoveda/napoveda-5-cs.webp';
	import ImgH6 from '$lib/static/images/napoveda/napoveda-6-cs.webp';
	import ImgH7 from '$lib/static/images/napoveda/napoveda-7-cs.webp';
</script>

<h2>Úvod</h2>
<p>
	Aplikace <strong>Analytika ASEP</strong> slouží pro zobrazení analytických přehledů, které jsou
	založeny na kombinaci dotazů a výpočtů nad daty uloženými v databázi ASEP. Podrobně o systému ASEP
	<a href="https://asep-portal.lib.cas.cz/" target="_blank">zde</a>. Zobrazují se zde reálná data,
	která lze vyhledat i v online katalogu: 
	<a href="https://asep.lib.cas.cz/arl-cav/cs/vyhledavani/" target="_blank"
		>https://asep.lib.cas.cz/arl-cav/cs/vyhledavani/</a
	>.
</p>

<h2>Hlavní strana, horizontální menu, vertikální menu, filtry</h2>
<p>
	<strong>Na hlavní stránce</strong> aplikace je zobrazen seznam pracovišť AV ČR, kde jsou
	<strong>ústavy</strong>
	seřazeny dle <strong>vědních oblastí</strong> (I. Vědy o neživé přírodě, II. Vědy o živé přírodě a
	chemické vědy a III. Humanitní a společenské vědy). V dolní části jsou k dispozici informace o ústavech,
	které byly zrušeny.
</p>
<p>
	<strong>Horizontální menu</strong> je stejné na všech stránkách aplikace. Obsahuje odkaz na
	<strong>úvodní stranu</strong>
	systému, do <strong>on-line katalogu</strong> a na podrobné
	<strong>informace o systému ASEP</strong>. Je zde umístěno pole pro
	<strong>rychlé vyhledání</strong>
	autora a záznamu dle systémového čísla.
	<strong>Informace o Analytikách ASEP</strong> jsou popsány v nápovědě. Jazyk aplikace lze přepínat
	mezi angličtinou a češtinou.
</p>
<img
	src={ImgH1}
	class="c-site-obr"
	alt={t('site.help.img01', $language, 'u')}
	width="1250"
	height="738"
	loading="lazy"
/>
<p>
	<strong>Na</strong> <strong>stránkách jednotlivých subjektů</strong> (ústavů, oddělení, autorů) je
	levé <strong>vertikální menu,</strong>
	které má stejnou strukturu u všech stránek, ale nabídka se liší v závislosti na subjektu, ke kterému
	patří. Obecně je menu rozděleno na tři části: <strong>přehled publikací</strong>,
	<strong>statistické a grafické výstupy</strong>
	a <strong>přehledy poskytovatelů a projektů</strong> za jejichž podpory výstupy vznikly.<br />
	Vpravo od vertikálního menu je zobrazen <strong>filtr</strong>, kde je možné nastavit výběr
	časového období, druhu dokumentu, typu projektu, poskytovatele atd. Pod filtrem je umístěna datová
	oblast, kde jsou zobrazeny přehledy záznamů.
</p>
<img
	src={ImgH2}
	class="c-site-obr"
	alt={t('site.help.img02', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<p>
	Vyhledané záznamy lze třídit a zobrazit dle několika předdefinovaných druhů třídění a
	zobrazovacích formátů. Na obrazovce se zobrazí najednou max. 50 záznamů.
</p>
<p>Na všech stránkách, které zobrazují záznamy jsou následující možnosti exportu:</p>
<ul class="c-ul-li">
	<li>
		Excel (formát XLSX) - export všech záznamů, které odpovídají danému filtrování (max. 500
		výsledků)
	</li>
	<li>PDF - export aktuální stránky do PDF</li>
	<li>Tisk - otevře systémový dialog pro tisk, který umožňuje tisk aktuální stránky</li>
</ul>
<p>
	Na všech stránkách, které zobrazují přehledy ve formě tabulek existují následující možnosti
	exportu:
</p>
<ul class="c-ul-li">
	<li>Excel (formát XLSX) - exportuje celou tabulku tak, jak je vidět na webu ve formátu XLSX</li>
	<li>
		PDF - exportuje tabulku ve formátu PDF. Pokud tabulka na webu obsahuje více než 10 sloupců, pro
		lepší čitelnost je automaticky nastavena velikost papíru na A3
	</li>
	<li>Tisk - otevře systémový dialog pro tisk, který umožňuje tisk. Vždy ve formátu A4</li>
</ul>
<p>
	V případě grafu lze pomocí tlačítka “Uložit graf”, příslušný graf stáhnout jako obrázek ve formátu
	.png.
</p>

<h2>Přehledy</h2>
<h3>Publikace ASEP</h3>
<p>
	V přehledech jsou zobrazeny bibliografické záznamy, vybrané dle zadaného filtru (roky vydání,
	druhy dokumentů, RIV).
</p>
<p>
	U každého záznamu jsou zobrazeny <strong>odkazy</strong> do RIV, WOS, SCOPUS, DOI a PUBMED, které
	doplňují informace o výsledku. Odkaz <strong>DOI</strong> uživatele nasměruje k dalším možnostem
	získání plného textu. Všem záznamům je přidělen jednoznačný trvalý identifikátor
	<strong>Handle</strong>.
</p>
<p>
	Pokud je plný text výsledku uložen v repozitáři ASEP, u záznamu je ikonka zámečku. <strong
		>Otevřený zámeček</strong
	>
	= plný text je přístupný ke stažení v režimu open access.<strong>Uzavřený zámeček</strong> = plný text
	je na vyžádání.
</p>
<img
	src={ImgH3}
	class="c-site-obr c-site-obr--s01"
	alt={t('site.help.img03', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<h3>Datové záznamy v ASEP</h3>
<p>
	V přehledech jsou zobrazeny datové záznamy, vybrané dle zadaného filtru (rok zveřejnění, dataset
	v ASEP či na jiném úložišti). V ASEP lze popsat dataset, který je uložen i na úložišti, které
	neumožňuje popis (např. úložiště ústavu).
</p>
<img
	src={ImgH4}
	class="c-site-obr c-site-obr--s01"
	alt={t('site.help.img04', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<h3>RIV – aktuální sběr</h3>
<p>
	Stránka slouží pro kontrolu záznamů, které budou v aktuálním roce vyexportovány do RIV. Lze si
	vyfiltrovat záznamy, které nejsou označeny do RIV, záznamy, které vytvořil spolupracující ústav,
	případně záznamy, které budou odevzdány jako druh dokumentu „Ostatní“.
</p>
<h3>Bibliografie autorů</h3>
<p>
	Seznam všech autorů, kteří publikovali za daný ústav. Autora lze najít vyplněním jména do
	vyhledávacího pole. Odkazy u jmen autorů vedou na webovou stránku autora na Analytikách ASEP a do
	databází ORCID, WOS, SCOPUS.
</p>
<p>
	K dispozici jsou dvě zaškrtávací možnosti: "Pracovníci ústavu" a "Všichni autoři". Po zaškrtnutí
	možnosti "Všichni autoři" se zobrazí autoři, kteří mají afiliaci s ústavem AV ČR a jsou uvedeni v
	databázi. Může se jednat i o autory bez publikací. Pokud je zaškrtnutá možnost "Pracovníci
	ústavu", zobrazí se pouze autoři, kteří jsou aktuálními zaměstnanci v ústavu AV ČR. Při vytváření
	nové autority autora je tato autorita automaticky označena jako "ACTV". V případě, že autor ústav
	AV ČR opustí nebo začne publikovat pod jiným jménem, měl by zpracovatel odstranit příznak "ACTV" z
	autority autora v poli "Aktivita autora" (969 f).
</p>
<img
	src={ImgH5}
	class="c-site-obr c-site-obr--s01"
	alt={t('site.help.img05', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<p>
	<em
		><strong
			>Pokud identifikátor autor používá, ale není u jména zobrazen, je potřeba jej nahlásit
			<a href="https://asep-portal.lib.cas.cz/uvod-do-asep/zpracovatele-asep/" target="_blank"
				>zpracovateli</a
			>, který jej doplní do záznamu autora.</strong
		></em
	>
</p>
<h3>Oddělení ústavu</h3>
<p>
	Zobrazují se všechna oddělení ústavu, aktuální a zrušená. Kliknutím na odkaz lze získat další
	údaje, které se týkají oddělení (bibliografické přehledy publikací, datových záznamů, počty
	záznamů, přínos autorů za vybrané časové období).
</p>
<img
	src={ImgH6}
	class="c-site-obr c-site-obr--s02"
	alt={t('site.help.img06', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<h2>Statistiky</h2>
<p><strong>Počty záznamů:</strong> výběr druhů dokumentů za zvolené časové období.</p>
<p>
	<strong>Přehled oddělení:</strong> počty záznamů vybraných druhů dokumentů za zvolené časové období
	pro jednotlivá oddělení.
</p>
<p>
	<strong>Přínos autorů</strong> umožňuje zadat a zobrazit počty a skladbu výsledků pro konkrétní
	autory z ústavu. Proklikem na jméno autora se lze dostat na stránku s přehledem publikací daného
	autora v rámci Analytik ASEP. Zároveň počty záznamů jsou proklikem, vedoucím na zobrazení
	příslušných záznamů v ASEPu.
</p>

<h2>Finanční podpora</h2>
<p>Projekty ústavu, programy AV ČR, velké výzkumné infrastruktury, institucionální podpora.</p>
<p>
	U každého ústavu/autora lze zobrazit projekty, kde je ústav/autor příjemcem nebo spolu/příjemcem
	finanční podpory. <strong
		>Projekty
		<a href="https://www.isvavai.cz/cep?s=jednoduche-vyhledavani" target="_blank">CEP</a></strong
	>
	(řešené, bez výsledku v ASEP, ukončené od roku 2013),
	<strong>zahraniční projekty</strong> a <strong>tuzemské projekty</strong>.
</p>
<img
	src={ImgH7}
	class="c-site-obr c-site-obr--s02"
	alt={t('site.help.img07', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<p>
	Lze zobrazit i přehledy výstupů, které jsou navázány na <strong
		>programy AV ČR a velké výzkumné infrastruktury.</strong
	>
</p>
<p>
	Výsledky navázané na <strong>institucionální podporu</strong> je možné zobrazit jako
	bibliografické přehledy, nebo v tabulce, kde jsou uvedeny počty záznamů vybraných druhů dokumentů
	za vybrané časové období.
</p>
<h2>Řazení záznamů, zobrazovací formáty</h2>
<p>
	Bibliografické a datové záznamy (v sekcích Publikace ASEP, Datové záznamy ASEP, Velké výzkumné
	infrastruktury, Inst. podpora - záznamy) je možné řadit podle:
</p>
<ul class="c-ul-li">
	<li>roku vydání</li>
	<li>autora</li>
	<li>Názvu dokumentu</li>
	<li>Druhu dokumentu</li>
</ul>
<p>Bibliografické a datové záznamy lze zobrazit v následujících formátech:</p>
<ul class="c-ul-li">
	<li>Základní formát</li>
	<li>Citace ČSN ISO-690</li>
	<li>Základní bez záhlaví</li>
	<li>Základní s citacemi</li>
</ul>



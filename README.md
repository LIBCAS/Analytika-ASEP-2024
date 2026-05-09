# Analytika-ASEP-2024
Toto je repozitář pro open source analytickou nadstavbu pro [ASEP](https://asep-portal.lib.cas.cz/).<br> 
<br>
<br>
## Architektura klienta Analytik ASEP
Klientská část systému je vytvořena pomocí JavaScript frameworku SvelteKit. 
Samotný framework pro svůj běh i sestavení vyžaduje Node.js.  
Využívá se **hybridní přístup**  - SSG + SPA. 
- SSG (Static Site Generation):
  - Použit pro části s předvídatelným obsahem – např. ústavy, oddělení
  - Výhody: rychlost, SEO, minimální zátěž serveru
- SPA chování (Single Page Application):
  - Použito tam, kde je vyžadována vyšší interaktivita – např. autoři

Rozlišení mezi statickým a dynamickým režimem je v URL reprezentováno použitím hash fragmentu (#).  
Datová vrstva je implementována odděleně přes rozhraní LoginGateway, které přistupuje ke komerčnímu systému ARL pomocí REST API.

## Oddělitelnost
Celý systém je navržen s důrazem na oddělitelnost jednotlivých částí:
- Klient (SvelteKit + JS)
- Styly (oddělené SCSS/SASS)
- Data (asynchronně přes API)
- Vstup pro statický build v rámci SSG (JSON konfigurace) je generován sestaven samostatnou aplikací
- Datová vrstva je implementována odděleně přes rozhraní LoginGateway, které přistupuje ke komerčnímu systému ARL pomocí REST API.

## Nasazení a přenositelnost
Výstupem je čistá statická webová aplikace, která je:
- snadno přenositelná
- nezávislá na konkrétním backendu
- provozuschopná na jakémkoliv webhostingu, který umožňuje obsluhu statických HTML souborů

## Instalace klienta
````
cd /my-install-dir/
npm create svelte@latest sveltekit-server1
````

### doporučené volby:
````
skeleton
js
eslint, prettier, vitest
````

### Instace "adapter-static"
````
npm install -D @sveltejs/adapter-static
````

### Instace komponenty Tabulator - open source datagrid component
````
npm install tabulator-tables --save
````

### Instace komponenty Chart.js - open source JavaScript charting library
````
npm install chart.js --save
npm install chartjs-plugin-datalabels --save
````

## Nastavení klienta
### Nastavení prostředí
- konfigurace modulu *src/lib/settings.js* 

### Nastavení jazykové mutace
- jazykové mutace *src/lib/translations* 

### Nastavení mezipaměti konfigurací
- jazykové mutace *src/lib/settingsConfCache.js* 

*Mezipaměť konfigurací je udržována v sessionStorage po dobu max. 10 minut.*


## Ukázka konfigurace "svelte.config.js"
```
// adapter static - nastavit
import adapter from '@sveltejs/adapter-static';

// import app settings
import settings from './src/lib/settings.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			prerender: {
				crawl: false
			}
		}),
		prerender: {
			crawl: false,
			handleHttpError:'ignore'
		},
		paths: {
			relative: false,
			assets: settings.domena,
			base: settings.base
		},
		alias: {
			$utils: 'src/lib/utils',
			$models: './src/lib/models',
			$services: './src/lib/services'
		},
		csp: {
			mode: "hash",
		},
	},
};
export default config;
````

## Spuštění vývoje
````
npm run dev
````

## Samotný build aplikace
````
npm run build
````














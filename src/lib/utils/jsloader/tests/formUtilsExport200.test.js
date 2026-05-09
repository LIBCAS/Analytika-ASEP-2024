import { describe, it, expect } from 'vitest';
import { FormUtils } from "../Forms/FormUtils.js";

/**
 * Information about exports / print outputs that should be published.
 * See also: "Configuration 200d", key: "tisk".
 */
describe('TEST - DETEKCE TISKU - EXPORT INFORMACI Z OBJEKTU ZISKANEHO DLE KONFIGURACE ARL', () => {
	const formUtils = new FormUtils();

	// real object with string data
	const objData200String = [
		{
			"0": "VYSLEDKY",
			"1": "Publikace ASEP",
			"2": "Publikace ASEP",
			"3": {
				"zobrazeni": "VYSLEDKY",
				"tisk": "STRANA",
				"zf": "CAV_BIBCIT_INI",
				"zf_ciselnik": [
					{
						"0": "CAV_BIBCIT_INI",
						"1": "Bibliografický formát",
						"2": "1"
					},
					{
						"0": "TF_SF_ANAL_SHORT",
						"1": "Zkrácený formát",
						"2": null
					},
					{
						"0": "TF_UN_EPCA_NZN",
						"1": "Bez záhlaví",
						"2": null
					},
					{
						"0": "SHORTCIT",
						"1": "Zkrácený formát s citacemi",
						"2": null
					}
				],
				"trideni": "DKI_AUP_TITLE",
				"trideni_ciselnik": [
					{
						"0": "DKI_AUP_TITLE",
						"1": "Seřadit podle druhu dokumentu",
						"2": "1"
					},
					{
						"0": "AUP_TITLE",
						"1": "Seřadit podle autora",
						"2": null
					},
					{
						"0": "TITLE",
						"1": "Seřadit podle názvu dokumentu",
						"2": null
					}
				]
			},
			"4": null
		}
	];



	// real object with array
	const objData200Arr = [
		{
			"0": "VYSLEDKY",
			"1": "Publikace ASEP",
			"2": "Publikace ASEP",
			"3": {
				"zobrazeni": "VYSLEDKY",
				"tisk": ["STRANA", "CSV", "PDF"],
				"zf": "CAV_BIBCIT_INI",
				"zf_ciselnik": [
					{
						"0": "CAV_BIBCIT_INI",
						"1": "Bibliografický formát",
						"2": "1"
					},
					{
						"0": "TF_SF_ANAL_SHORT",
						"1": "Zkrácený formát",
						"2": null
					},
					{
						"0": "TF_UN_EPCA_NZN",
						"1": "Bez záhlaví",
						"2": null
					},
					{
						"0": "SHORTCIT",
						"1": "Zkrácený formát s citacemi",
						"2": null
					}
				],
				"trideni": "DKI_AUP_TITLE",
				"trideni_ciselnik": [
					{
						"0": "DKI_AUP_TITLE",
						"1": "Seřadit podle druhu dokumentu",
						"2": "1"
					},
					{
						"0": "AUP_TITLE",
						"1": "Seřadit podle autora",
						"2": null
					},
					{
						"0": "TITLE",
						"1": "Seřadit podle názvu dokumentu",
						"2": null
					}
				]
			},
			"4": null
		}
	];

	it('Test string', () => {
		const inVars = objData200String;

		const outVars = [];
		outVars[0] = 'STRANA';
		expect(formUtils.export200(inVars, true)).toStrictEqual(outVars);
	});

	it('Test array', () => {
		const inVars = objData200Arr;
		const outVars = ["STRANA", "CSV", "PDF"];
		expect(formUtils.export200(inVars, true)).toStrictEqual(outVars);
	});

});
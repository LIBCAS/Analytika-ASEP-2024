import { describe, it, expect } from 'vitest';
import { FormReaderDate } from "../Forms/FormReaderDate.js";
/**
 * We care about:
 * subtag `$g` - DATES / years
 *
 * Format:
 * `DATE_FROM*DATE_TO|PRESELECTED_DATE_FROM*PRESELECTED_DATE_TO`
 *
 * Rules:
 * - If a date is missing, the current date is used.
 * - The year can use `+` or `-` expressions to modify the date.
 * - It is also possible to provide an explicit list of years.
 *
 * Example of explicit years:
 * `2023,2022,2021`
 *
 * Example:
 * `+1*-10|2023,2022,2021`
 *
 * If the current year is 2024, the displayed range will be 2025–2014
 * and the preselected years will be 2023, 2022, 2021.
 *
 * In tests, the year is fixed to `2020` according to the setup:
 * `expect(readerDate.init(inVars, 2020)).toStrictEqual(outVars);`
 */
describe('TEST - GENERACE DATUM - ROKY ZADANI', () => {
	const readerDate = new FormReaderDate();

	let outVars = {};
	let inVars = '';


	it('Test oddelovace carka ","', () => {
		inVars = '2024,2023|2023,2022,2020';
		outVars = {};
		outVars.roky = [];
		outVars.vybrane = null;
		let outVarsItem = {};
		outVarsItem[0] = '2024';
		outVarsItem[1] = '2024';
		outVarsItem[2] = null;
		outVars.roky[0] = outVarsItem;
		outVarsItem = {};
		outVarsItem[0] = '2023';
		outVarsItem[1] = '2023';
		outVarsItem[2] = '1';
		outVars.roky[1] = outVarsItem;
		expect(readerDate.init(inVars)).toStrictEqual(outVars);
	});


	it('Test zadani "*", vybrano ","', () => {
		inVars = '-2*-3|2022,2020,2017,2011';
		outVars = {};
		outVars.roky = [];
		outVars.vybrane = null;
		let outVarsItem = {};
		outVarsItem[0] = '2018';
		outVarsItem[1] = '2018';
		outVarsItem[2] = null;
		outVars.roky[0] = outVarsItem;
		outVarsItem = {};
		outVarsItem[0] = '2017';
		outVarsItem[1] = '2017';
		outVarsItem[2] = '1';
		outVars.roky[1] = outVarsItem;

		expect(readerDate.init(inVars, 2020)).toStrictEqual(outVars);
	});

	it('Test zadani "*" a rok "v celku"', () => {
		inVars = '-1*2017|2022,2020,2019,2017,2011';

		outVars = {};
		outVars.roky = [];
		outVars.vybrane = null;

		let outVarsItem = {};
		outVarsItem[0] = '2019';
		outVarsItem[1] = '2019';
		outVarsItem[2] = '1';
		outVars.roky[0] = outVarsItem;
		outVarsItem = {};
		outVarsItem[0] = '2018';
		outVarsItem[1] = '2018';
		outVarsItem[2] = null;
		outVars.roky[1] = outVarsItem;
		outVarsItem = {};
		outVarsItem[0] = '2017';
		outVarsItem[1] = '2017';
		outVarsItem[2] = '1';
		outVars.roky[2] = outVarsItem;

		expect(readerDate.init(inVars, 2020)).toStrictEqual(outVars);
	});

});
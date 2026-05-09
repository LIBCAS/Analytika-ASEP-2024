import * as defaultJson from "$lib/../sources/default.json";
import * as entriesJson from "./entriesJson.json";
import {confDepartment} from "$utils/routes/confDepartment.js";
export function entries(params) {
	return entriesJson.out;
	/*
	return [
		{ id: '65038-oddeleni-paleoslovenistiky-a-byzantologie' },
		{ id: '65039-oddeleni-slavisticke-lingvistiky-a-lexikografie' },
		{ id: '65040-oddeleni-dejin-slavistiky-a-slovanskych-literatur' }
	];
	*/
}
export function load({ params }) {
	const arr = defaultJson.oddeleni_cs;
	return confDepartment(params, arr)
}
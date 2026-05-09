import home from '$lib/translations/sites/home';
import vedniOblasti from '$lib/translations/sites/vedniOblasti';
import oDatabazi from '$lib/translations/sites/oDatabazi';
import form from '$lib/translations/sites/form';
import oddeleni from '$lib/translations/sites/oddeleni';
import authors from '$lib/translations/sites/authors';
import help from '$lib/translations/sites/help';
export default {
	cs: {
		...vedniOblasti.cs,
		...home.cs,
		...oDatabazi.cs,
		...form.cs,
		...oddeleni.cs,
		...authors.cs,
		...help.cs
	},
	sk: {},
	en: {
		...vedniOblasti.en,
		...home.en,
		...oDatabazi.en,
		...form.en,
		...oddeleni.en,
		...authors.en,
		...help.en
	}
};






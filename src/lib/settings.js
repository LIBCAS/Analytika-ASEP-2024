export default {
	// Use the development database?
	vyvoj: false,
	// Development mode
	devel: false,
	// Client testing mode
	v7test: true,
	// Domain used for links
	domena: '',  // 'http://localhost:5173',
	// Base folder
	base: '',
	// Menu configuration
	menu_ustav: 'MENU_USTAV',
	menu_oddeleni: 'MENU_ODDEL',
	menu_vo: 'MENU_OBLAST',
	menu_autor: 'MENU_AUTOR',
	api_url: '', // Base URL for the ARL API
	api_version: 'v1',  // API version
	arl_cookies: '',  // ARL cookies
	arl_ictx: '', // ARL ictx
	arl_apiu: '',  // ARL API user
	token_gate: '', // ARL token gate
	token_gate_test: '', // ARL token gate - test server
	pdf_ex: '',
	pdf_ex_tab: '',
	hide_forms: ['PO05', 'GRA', 'PA01x', 'PO07x'],
	institute_cep_header: ['PO02'],
	auxilitary_projects: ['PO05'],
	auxilitary_projects_cep: ['PO02'],
	auxilitary_projects_detail: 'GRA',
	auxilitary_projects_cep_detail: 'GRA',
	pagination: ['AU01', 'PO02', 'DO02', 'PO03', 'PO05', 'PO06', 'UT02', 'UT06', 'UT03', 'GRA'], // Enable pagination for these pages
	authorConf: 'UT04',
	departmentListConf: 'UT05', 
	errorAuthCode: 'ERR_AUTH009', // Authentication error code
	breadcrumbDepartment: 'UT05',
	breadcrumbAuthor: 'UT04',
	menuHideActive: true,
	riv_others_active: ['UT03', 'AU02'], // RIV submitted as "other" — active sections
	end_project: ['PO02'], // Sections where the project termination function is enabled, e.g. end_project: ['PO02', 'PO05']
	conf_select_project: 'PO02', // Section where project-based select dependencies are enabled
	master_select_project: 'projekty', // Master field for project-based select dependencies
	slave_select_project: 'poskytovatel' // Slave field for project-based select dependencies
};
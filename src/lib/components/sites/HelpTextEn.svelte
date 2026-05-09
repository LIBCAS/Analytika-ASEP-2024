<script>
	// stores
	import { language } from '$lib/stores/language';

	// utilitis
	import { t } from '$lib/utils/translate';

	// images
	import ImgH1 from '$lib/static/images/help/help-1-en.webp';
	import ImgH2 from '$lib/static/images/help/help-2-en.webp';
	import ImgH3 from '$lib/static/images/help/help-3-en.webp';
	import ImgH4 from '$lib/static/images/help/help-4-en.webp';
	import ImgH5 from '$lib/static/images/help/help-5-en.webp';
	import ImgH6 from '$lib/static/images/help/help-6-en.webp';
	import ImgH7 from '$lib/static/images/help/help-8-en.webp';
</script>

<h2>Introduction</h2>
<p>
	The ASEP Analytics application is used to display analytical reports based on a combination of
	queries and calculations over data that are stored in the ASEP database. <a
		href="https://asep-portal.lib.cas.cz/basic-information/"
		target="_blank">More information about the ASEP system</a
	>. It displays real data, which can also be found in the online catalogue:
	<a href="https://asep.lib.cas.cz/arl-cav/en/search/" target="_blank"
		>https://asep.lib.cas.cz/arl-cav/en/search/</a
	>
</p>
<h2>Homepage, horizontal menu, vertical menu, filters</h2>
<p>
	The <strong>home page</strong> of the application displays a list of <strong>institutes</strong>
	of the CAS, where the institutes are sorted by <strong>scientific areas</strong>
	(I. Sciences of inanimate nature, II. Life Sciences and Chemical Sciences and III. Humanities and Social
	Sciences). In the lower part, information on institutes that have been closed is available.
</p>
<p>
	<strong>The horizontal menu</strong> is the same on all pages of the app. It contains a link to
	the system <strong>homepage</strong>,
	<strong>the online catalogue</strong> and detailed information about the ASEP system. There is a
	field to quickly search for an author and record by system number. Information about
	<strong>ASEP analytics</strong> is described in the help. The language of the application can be switched
	between English and Czech.
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
	<strong>On the pages of individual subjects</strong> (institutes, departments, authors) there is a
	left <strong>vertical menu</strong>, which has the same structure for all pages, but the menu
	varies depending on the subject to which it belongs. In general, the menu is divided into three
	sections:
	<strong>overview of publications</strong>, <strong>statistical and graphical outputs</strong>, and
	overviews of funders and projects that have funded the outputs.
</p>
<p>To the right of the vertical menu, a <strong>filter</strong> is displayed, where it is possible to select the time period, 
	document type, project type, provider, etc. Below the filter there is a data area where record summaries are displayed.</p>
<img
	src={ImgH2}
	class="c-site-obr"
	alt={t('site.help.img02', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<p>
	Searched records can be sorted and displayed according to several predefined sort types and
	display formats. A maximum of 50 records are displayed on the screen at one time.
</p>
<p>All pages that display records have the following export options:</p>
<ul class="c-ul-li">
	<li>
		Excel (XLSX format) - export all records that match the given filtering (max. 500 results)
	</li>
	<li>PDF - export the current page to PDF</li>
	<li>Print - opens a system print dialog that allows printing the current page</li>
</ul>
<p>The following export options exist on all pages that display reports as tables:</p>
<ul class="c-ul-li">
	<li>Excel (XLSX format) - exports the entire table as seen on the site in XLSX format.</li>
	<li>
		PDF - exports the table in PDF format. If the web table contains more than 10 columns, the paper
		size is automatically set to A3 for better readability.
	</li>
	<li>Print - opens the system print dialog, which allows printing.</li>
</ul>
<p>The graph can be downloaded as an image in .png format using the "Save graph" button.</p>

<h2>Overviews</h2>
<h3>ASEP Publications</h3>
<p>
	The overviews show bibliographic records selected according to the specified filter (years of
	publication, types of documents, RIV).
</p>
<p>
	For each record, <strong>links</strong> to RIV, WOS, SCOPUS, DOI and PUBMED are displayed to
	complement the result information. The <strong>DOI</strong> link directs the user to other options
	for obtaining the full text. All records are assigned a unique persistent
	<strong>Handle identifier</strong>.
</p>
<p>
	If the full text of the result is stored in the ASEP repository, there is a lock icon next to the
	record.
</p>
<p><strong>Open Handle =</strong> full text is available for download in open access mode.</p>
<p><strong>Closed Handle =</strong> full text is available on request.</p>
<img
	src={ImgH3}
	class="c-site-obr c-site-obr--s01"
	alt={t('site.help.img03', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<h3>Data records in ASEP</h3>
<p>
	The reports display data records selected according to the specified filter (year of publication,
	dataset in ASEP or another repository). It is possible to describe a dataset in ASEP that is also
	stored on a repository that does not allow description (e.g. the Institute's repository).
</p>
<img
	src={ImgH4}
	class="c-site-obr c-site-obr--s01"
	alt={t('site.help.img04', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<h3>RIV - current harvest</h3>
<p>
	This page is used to review the records that will be exported to RIV in the current year. It is
	possible to filter records that are not marked for RIV, records created by a collaborating
	institute, or records that will be submitted as document type "Other".
</p>

<h3>Authors Bibliography</h3>
<p>
	List of all authors who have published for the institute. The author can be found by typing the
	name in the search field. The links next to the authors' names lead to the author's web page on
	ASEP Analytics and to the ORCID, WOS, SCOPUS databases.
</p>
<p>
	There are two checkboxes: 'Institute staff' and 'All authors'. After checking the "All authors"
	option, authors who have affiliation with the Institute of CAS and are listed in the database will
	be displayed. These may also be authors without publications. If the "Institute staff" option is
	checked, only authors who are currently employed by the CAS Institute will be displayed. When
	creating a new author authority, this authority is automatically marked as "ACTV". If the author
	leaves the CAS or starts publishing under a different name, the processor should remove the "ACTV"
	flag from the author authority in the "Author activity" field (969 f).
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
	<strong
		>If the identifier is used by the author but is not displayed next to the name, it should be
		reported to the
		<a href="https://asep-portal.lib.cas.cz/uvod-do-asep/zpracovatele-asep/" target="_blank"
			>ASEP administrator</a
		>, who will add it to the author's record.</strong
	>
</p>

<h3>Departments of the Institute</h3>
<p>
	All departments of the institute, current and closed, are displayed. By clicking on the link you
	can get additional data related to the department (bibliographic summaries of publications, data
	records, number of records, contribution of authors for the selected time period).
</p>

<img
	src={ImgH6}
	class="c-site-obr c-site-obr--s02"
	alt={t('site.help.img06', $language)}
	width="1250"
	height="738"
	loading="lazy"
/>
<h2>Statistics</h2>
<p>Record counts: a selection of document types for the selected period.</p>
<p>
	Department overview: number of records of selected document types for the selected time for each
	department.
</p>
<p>
	Author Contribution: allows you to enter and view the counts and composition of results for
	specific authors from the department. A click on the author's name will take you to the author's
	publications overview page within ASEP Analytics. At the same time, the record counts are a
	click-through leading to the display of the relevant records in ASEP.
</p>

<h2>Funding</h2>
<p>Institute projects, CAS programmes, large research infrastructures, institutional support.</p>
<p>
	For each institute/author it is possible to display projects where the institute/author is a
	beneficiary or co/beneficiary of financial support.
	<strong>CEP project</strong>s (ongoing, without result in ASEP, terminated since 2013),
	<strong>foreign projects and domestic projects</strong>.
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
	It is also possible to view overviews of outputs that are linked to programmes of the CAS and
	large research infrastructures.
</p>
<p>
	Results linked to institutional support can be displayed as bibliographic summaries or in a table
	showing the number of records of selected document types for a selected period.
</p>
<h2>Sorting, views</h2>
<p>
	Bibliographic and data records (in the sections ASEP Publications, ASEP Data Records, Large
	Research Infrastructures, Institutional Funded Records) can be sorted by:
</p>
<ul class="c-ul-li">
	<li>Year of publication</li>
	<li>Author</li>
	<li>Document title</li>
	<li>Document type</li>
</ul>
<p>Bibliographic and data records can be displayed in the following formats:</p>
<ul class="c-ul-li">
	<li>Short</li>
	<li>Citation CSN ISO 690</li>
	<li>Short without heading</li>
	<li>Short + citation</li>
</ul>
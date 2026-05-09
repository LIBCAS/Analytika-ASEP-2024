/* global html2canvas */

/**
 * Print view to external window, use htmltocanvas
 * @param {string} id 
 * @param {string} idT 
 * @param {string} nazev 
 * @param {string} textFoot 
 * @param {string} lang 
 */
export function printEx(id, idT, nazev = 'export', textFoot = '', lang = 'cs') {
  try {
		const textToPrint = document.getElementById(id);
		const textTime = textToPrint.querySelector('#' + idT);
		const now = new Date();
		const year = now.getUTCFullYear();
		let dateGr = '';
		const options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false
		};
		if (lang === 'cs') {
			dateGr = now.toLocaleDateString('cs-CZ', options);
		} else {
			dateGr = now.toLocaleDateString('en-US', options);
		}
		textTime.textContent = '© ' + year + ' ' + textFoot + ': ' + dateGr;
		html2canvas(textToPrint, { scale: 1 }).then(() => {
			let windowContent = '<!DOCTYPE html>';
			windowContent += '<html>';
			windowContent += '<head><title>' + nazev + '</title></head>';
			windowContent += '<body>';
			windowContent += '<style>body {font-size:1rem; line-height:1.7rem; }</style>';
			// HTML TISK - KLASICKY
			windowContent += textToPrint.innerHTML;
			windowContent += '<script>window.print();</script>';
			windowContent += '</body>';
			windowContent += '</html>';
			const printWin = window.open('#', '_blank', 'resizable');
			if (printWin) {
				printWin.document.open();
				printWin.document.body.innerHTML = windowContent;
				printWin.document.close();
			}
		});
	} catch (error) {
		// ignore intentionally
		void error;
	}
}




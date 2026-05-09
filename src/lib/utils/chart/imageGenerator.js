/* global html2canvas */

/**
 * Generation image with chart data
 * @param {string} id 
 * @param {string} idT 
 * @param {string} nazev 
 * @param {Object<string, string>} text 
 * @param {String} lang 
 * @returns Boolean
 */
export function imageGenerator(id, idT, nazev = 'chart', text = {}, lang = 'cs') {
    try {
			const textFoot = text['graf_dole'] || '';
			/** @type {HTMLElement | null} */
			const chart = document.getElementById(id);
			if (!chart) {
				return false;
			}
			chart.style.padding = '22px';
			/** @type {HTMLElement | null} */
			const chartTime = chart.querySelector('#' + idT);
			if (!chartTime) {
				return false;
			}
			chartTime.style.color = '#444';
			chartTime.style.marginTop = '20px';
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
			if (lang == 'cs') {
				dateGr = now.toLocaleDateString('cs-CZ', options);
			} else {
				dateGr = now.toLocaleDateString('en-US', options);
			}
			chartTime.textContent = '© ' + year + ' ' + textFoot + ': ' + dateGr;
			html2canvas(chart, { scale: 5 }).then((canvas) => {
				const link = document.createElement('a');
				link.download = nazev + '.png';
				link.href = canvas.toDataURL('image/png');
				link.click();
				link.remove();
			});
			chart.style.padding = '0';
			chartTime.style.marginTop = '0px';
			chartTime.textContent = '';
			return true;
		} catch (error) {
			// ignore intentionally
			void error;
		}
    return false;
}










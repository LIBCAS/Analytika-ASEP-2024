// libraries
import settings from "$lib/settings";

// development
let devel = false;
if (typeof settings.devel !== 'undefined' && settings.devel) {
  devel = true;
}

/**
 * Export file by wkhtmltopdf
 * @param {string} urlServer 
 * @param {Array<any>} outData 
 * @param {string} nazev 
 * @param {string} lang 
 * @returns {Promise<boolean>}
 */
export async function pdfExServer(urlServer, outData, nazev = 'export', lang = 'cs') {
  try {

    // create html content
    let htmlContent = '';
    for (let i = 0; i < outData.length; i++) {
      for (let j = 0; j < 1; j++) {
        htmlContent += '<div class="mb-1">';
        htmlContent += outData[i];
        htmlContent += '</div>';
      }
    }

    // call render pdf
    const response = await fetch(urlServer + '&lang=' + lang, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ html: htmlContent })
    });
    if (!response.ok) {
      if (devel) {
        console.error(`Error: ${response}`);
        throw new Error('Wkhtmltopdf');
      }
    }
    // throw new Error('Wkhtmltopdf-test');

    const blob = await response.blob();
    if (renderFile(blob, nazev)) {
      pdfExServerSetting.nacteno = true;
      return true;
    }
  } catch (error) {
    if (devel) {
      throw new Error('Text generation: ' + error);
    }
  }
  return false;
}


/**
 * 
 * @param {string} urlServer 
 * @param {Array<any>} outData 
 * @param {string} nazev 
 * @param {string} lang 
 * @returns
 */
export function pdfExServerTable(urlServer, outData, nazev = 'export', lang = 'cs') {
  try {
    return fetch(urlServer + '&lang=' + lang, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ json: outData })
		})
			.then((response) => {
				if (!response.ok) {
					return false;
				}
				return response.blob();
			})
			.then((blob) => {
				pdfExServerSetting.nacteno = true;
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = nazev + '.pdf';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
				return true;
			})
			.catch((err) => {
				// ignore intentionally
				void err;
			});
  } catch (err) {
		// ignore intentionally
		void err;
  }
}

/**
 * Render exported Files
 * @param {Blob} blob - Blob objekt, který obsahuje data pro stažení.
 * @param {string} nazev - Název souboru, který bude stažen.
 * @returns {boolean} - Funkce vrací `true` pokud export probíhl úspěšně.
 */
function renderFile(blob, nazev) {
  try {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nazev}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    if (devel) {
      console.error('Text generation error: ' + error);
    }
    return false;
  }
}


export const pdfExServerSetting = {
  nacteno: false,
}


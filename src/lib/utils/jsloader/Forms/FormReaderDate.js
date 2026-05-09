'use strict';
import { t } from "../../translate.js";
/**
 * Date ARL format
 * 1*5|2023,2022
 * more: https://arl2.library.sk/wiki_arl/index.php/CAV/nab%C3%ADdka_2023/Konfigurace
 */
class FormReaderDate {
  #actYear;

  constructor() {
    this.#actYear = parseInt(new Date().getFullYear());
  }

	/**
	 * Init
	 *
	 * @param format
	 * @param actYear
	 * @param vybraneRoky
	 * @param lang
	 * @returns {{}}
	 */
  init(format, actYear = null, vybraneRoky = false, lang = 'en') {
    const out = {};
    out.roky = null;
    out.vybrane = null;
    let outRoky = [];
    let outVybrane = null;
    let outData = {};
    let str = format;
    str = str.trim();
    let arr = str.split('|');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }
    if (!actYear) {
      actYear = this.#actYear;
    }

    outData.years = this.#getInterval(arr[0], actYear);
    outData.yearsSelect = this.#getInterval(arr[1], actYear);
    let j = 0;
    for (let key in outData.years) {
      let item = {};
      // var value = arr[key];
      item[0] = outData.years[key];
      item[1] = outData.years[key];
      if (outData.yearsSelect.includes(outData.years[key])) {
        item[2] = '1';
      } else {
        item[2] = null;
      }
      outRoky[j] = item;
      j++;
    }

    out.roky = outRoky;

    if (vybraneRoky) {
      outVybrane = {};
      outVybrane[0] = "soucetZaVybraneRoky";
      outVybrane[1] = t('site.form.soucet_vybrane_roky', lang);
      out.vybrane = outVybrane;
    }
    return out;
  }

  #getInterval(yearStr, actYear) {
    const reg = new RegExp(',', 'g');
    const reg2 = new RegExp("\\*", 'g');
    let arrYears = [];

    if (reg.test(yearStr) == true) {
      arrYears = yearStr.split(',');
    }
    else if (reg2.test(yearStr) == true) {
      const arrYearsSyntaxe = yearStr.split('*');
      let top = 0;
      let down = 0;
      const actY = actYear;
      for (let i = 0; i < arrYearsSyntaxe.length; i++) {
        arrYearsSyntaxe[i] = arrYearsSyntaxe[i].trim();
      }
      if (arrYearsSyntaxe[0]) {
        top = parseInt(arrYearsSyntaxe[0]);
      }
      down = parseInt(arrYearsSyntaxe[1]);
      // console.log(down, '---- down ---');
      if (typeof (top) !== "number") {
        top = 0;
      }
      if (typeof (down) !== "number") {
        down = 0;
      }
      top = (top > 1000) ? top : actY + top;
      down = (down > 1000) ? down : actY + down; //down = actY + down + 1;   //down = actY + down;

      if (down > top) {
        throw new Error
          (`FormReaderDate - nevhodne nastaveni datumu, od: ${top}, do: ${down}`);
      }
      if (top - down > 200 | down < 1) {
        throw new Error
          (`FormReaderDate - nevhodne nastaveni datumu, rozsah hodnot je moc velky`);
      }
      let j = 0;
      for (let i = top; i >= down; i--) {
        arrYears[j] = i.toString();
        j++;
      }
    }
    else {
      arrYears[0] = yearStr.toString();
    }
    return arrYears;
  }
}

export { FormReaderDate }


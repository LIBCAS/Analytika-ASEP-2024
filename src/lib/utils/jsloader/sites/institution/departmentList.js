import { BaseDepartment } from "$lib/utils/jsloader/sites/institution/BaseDepartment.js";

export async function departmentList (id, formData, outData100, outData200, lang = 'en') {
  const objList = new BaseDepartment();
  return objList.init(id,lang)
}

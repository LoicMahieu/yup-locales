/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path}da xatolik mavjud',
  required: '${path} maydonga ma\'lumot kiritilmagan',
  oneOf: '${path} maydon ${values} qiymatlardan bittasi emas',
  notOneOf:
    '${path} maydon ushbu ${values} qiymatlarni qabul qilmaydi',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} maydon \`${type}\` turiga tegishli emas. ` +
      (isCast
        ? `\`${printValue(originalValue, true)}\` dan olingan `
        : '') +
      `oxirgi qiymat \`${printValue(value, true)}\` \` ga teng.`
      
    if (value === null) {
      msg += `\n Agar "null" bo‘sh qiymat bo‘lsa, sxemada \`.nullable()\` qilib belgilanganligiga ishonch hosil qiling`;
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} maydon ${length}ta belgidan iborat emas',
  min: '${path} maydon kamida ${min}ta belgidan iborat bo‘lishi lozim',
  max: '${path} maydon ko‘pi bilan ${max}ta belgidan iborat bo‘lishi mumkin',
  matches: '${path} maydon qiymati "${regex}" muntazam ifodaga mos emas',
  email: '${path} maydon qiymati e-mail emas',
  url: '${path} mayqon qiymati havola emas',
  trim: '${path} mayqon qiymati boshida yoki oxirida bo‘shliqlar mavjud',
  lowercase: '${path} mayqon qiymat kichik harflardan iborat emas',
  uppercase: '${path} mayqon qiymat bosh (katta) harflardan iborat emas',
};

export const number: LocaleObject['number'] = {
  min: '${path} maydon qiymati ${min}dan kichik',
  max: '${path} maydon qiymati ${max}dan katta',
  lessThan: '${path} maydon qiymati ${less}dan kichik emas',
  moreThan: '${path} maydon qiymati ${more}dan katta emas',
  positive: '${path} maydon qiymati musbat son emas',
  negative: '${path} maydon qiymati manfiy son emas',
  integer: '${path} maydon qiymati butun son emas',
};

export const date: LocaleObject['date'] = {
  min: '${path} maydon qiymati ${min} sanandan oldin bo‘lmasligi lozim',
  max: '${path} maydon qiymati ${max} sanadan keyin bo‘lmasligi lozim',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} maydon qiymati ${value} bo‘lishi shart',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} maydon qiymatida noma\'lum kalitlar mavjud',
};

export const array: LocaleObject['array'] = {
  min: '${path} maydon kamida ${min}ta elementdan iborat bo‘lishi lozim',
  max: '${path} maydon ko‘pi bilan ${max} elementdan iborat bo‘lishi mumkin',
};

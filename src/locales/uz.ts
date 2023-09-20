/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} yaroqsiz.',
  required: '${path} - bu majburiy maydon',
  defined: '${path} aniqlanishi kerak',
  notNull: "${path} null bo'lolmaydi",
  oneOf: "${path} quyidagi qiymatlardan biri bo'lishi kerak: ${values}",
  notOneOf: "${path} quyidagi qiymatlardan biri bo'lmasligi kerak: ${values}",
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} a "${type}\` to, ` +
      `Ammo yakuniy qiymat: \'${printValue(value, true)} \`` +
      (isCast ? ` (\`${printValue(originalValue, true)} qiymatidan).` : '.');

    if (value === null) {
      msg +=
        `\n Agar "null" bo\'sh qiymat sifatida mo\'ljallangan bo\'lsa, buxorni belgilang` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: "${path} aniq ${length} belgilar bo'lishi kerak",
  min: "${path} hech bo'lmaganda ${min} belgilar bo'lishi kerak",
  max: "${path} ko'pchilik ${max} belgilar bo'lishi kerak",
  matches: '${path} quyidagilarga mos kelishi kerak: "${regex}"',
  email: "${path} to'g'ri elektron pochta bo'lishi kerak",
  url: "${path} yaroqli url bo'lishi kerak",
  uuid: "${path} haqiqiy uuid bo'lishi kerak",
  trim: "${path} qirqilgan satr bo'lishi kerak",
  lowercase: "${path} kichik harfli satr bo'lishi kerak",
  uppercase: "${path} katta satr bo'lishi kerak",
};

export const number: LocaleObject['number'] = {
  min: "${path} ${min} dan katta yoki teng bo'lishi kerak]",
  max: "${path} dan kam yoki unga teng bo'lishi kerak ${max}",
  lessThan: "${path} dan kamroq bo'lishi kerak ${less}",
  moreThan: "${path} dan katta bo'lishi kerak ${more}",
  positive: "${path} ijobiy raqam bo'lishi kerak",
  negative: "${path} Salbiy raqam bo'lishi kerak",
  integer: "${path} butun son bo'lishi kerak",
};

export const date: LocaleObject['date'] = {
  min: "${path} dalasi ${min} dan keyinroq bo'lishi kerak",
  max: "${path} Maydon ${max} dan avvalroq bo'lishi kerak]",
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Maydon ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    "${path} maydon ob'ekt shaklida ko'rsatilmagan kalitlarga ega bo'lolmaydi",
};

export const array: LocaleObject['array'] = {
  min: "${path} Maydon kamida ${min} elementlari bo'lishi kerak",
  max:
    "${path} Maydon ${max} elementlarga qaraganda kam yoki teng bo'lishi kerak",
  length: '${path} ${length}',
};

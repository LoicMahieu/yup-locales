/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: 'A ${path} érvénytelen.',
  required: 'A ${path} egy szükséges mező',
  defined: '${path} meg kell határozni',
  notNull: '${path} nem lehet nulla',
  oneOf: '${path} a következő értékek egyikének kell lennie: ${values}',
  notOneOf: '${path} nem lehet a következő értékek egyike: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} "${type}" típusnak kell lennie, ` +
      `De a végső érték a következő volt: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (a „${printValue(originalValue, true)}” értékből öntött).`
        : '.');

    if (value === null) {
      msg +=
        `\n Ha a "null" üres értéknek szánják, feltétlenül jelölje meg a sémát` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} pontosan ${length} karaktereknek kell lennie',
  min: '${path} legalább ${min} karaktereknek kell lennie',
  max: '${path} legfeljebb ${max} karaktereknek kell lennie',
  matches: '${path} meg kell egyeznie a következőkkel: "${regex}"',
  email: '${path} érvényes e -mailnek kell lennie',
  url: '${path} érvényes URL -nek kell lennie',
  uuid: '${path} érvényes UUID -nak kell lennie',
  trim: 'A ${path} -nak vágott karakterláncnak kell lennie',
  lowercase: '${path} kisbetűs karakterláncnak kell lennie',
  uppercase: 'A ${path} -nak felsőfokú karakterláncnak kell lennie',
};

export const number: LocaleObject['number'] = {
  min: '${path} nagyobbnak vagy egyenlőnek kell lennie ${min}',
  max: 'A ${path} -nak kevesebbnek vagy egyenlőnek kell lennie ${max}',
  lessThan: 'A ${path} -nak kevesebbnek kell lennie, mint a ${less}',
  moreThan: '${path} nagyobbnak kell lennie, mint a ${more}',
  positive: '${path} pozitív számnak kell lennie',
  negative: '${path} negatív számnak kell lennie',
  integer: '${path} egész számnak kell lennie',
};

export const date: LocaleObject['date'] = {
  min: '${path} A mezőnek később kell lennie, mint a ${min}',
  max: '${path} A mezőnek korábban kell lennie, mint a ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} A mezőnek ${value} -nak kell lennie',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} A mezőnek nem lehet olyan kulcsok, amelyek nem adják meg az objektum alakjában',
};

export const array: LocaleObject['array'] = {
  min: '${path} A mezőnek legalább ${min} tételekkel kell rendelkeznie',
  max:
    '${path} A mezőnek kevesebbnek vagy egyenlőnek kell lennie a ${max} tételekkel',
  length: '${path} ${length} tételekkel kell rendelkeznie',
};

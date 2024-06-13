/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} on kehtetu',
  required: '${path} on nõutav väli',
  defined: '${path} tuleb määratleda',
  notNull: '${path} ei tohi olla null',
  oneOf: '${path} peab olema üks järgmistest väärtustest: ${values}',
  notOneOf: '${path} ei tohi olla üks järgmistest väärtustest: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} peab olema \`${type}\` tüüp, ` +
      `kuid lõppväärtus oli: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (valatud väärtusest \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\nKui "null" on mõeldud tühjaks väärtuseks, märkige skeem kindlasti kui` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} peab olema täpselt ${length} tähemärki',
  min: '${path} peab olema vähemalt ${min} tähemärki',
  max: '${path} peab olema maksimaalselt ${max} tähemärki',
  matches: '${path} peab vastama järgmisele: "${regex}"',
  email: '${path} peab olema kehtiv e-kiri',
  url: '${path} peab olema kehtiv URL',
  uuid: '${path} peab olema kehtiv UUID',
  trim: '${path} peab olema kärbitud string',
  lowercase: '${path} peab olema väiketähtedes',
  uppercase: '${path} peab olema suurtähtedes',
};

export const number: LocaleObject['number'] = {
  min: '${path} peab olema suurem või võrdne ${min}',
  max: '${path} peab olema väiksem või võrdne ${max}',
  lessThan: '${path} peab olema väiksem kui ${less}',
  moreThan: '${path} peab olema suurem kui ${more}',
  positive: '${path} peab olema positiivne arv',
  negative: '${path} peab olema negatiivne arv',
  integer: '${path} peab olema täisarv',
};

export const date: LocaleObject['date'] = {
  min: '${path} peab olema hilisem kui ${min}',
  max: '${path} peab olema varasem kui ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} peab olema ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} ei tohi sisaldada võtmeid, mis pole objekti kujus täpsustatud',
};

export const array: LocaleObject['array'] = {
  min: '${path} peab sisaldama vähemalt ${min} eset',
  max: '${path} võib sisaldada maksimaalselt ${max} eset',
  length: '${path} peab sisaldama täpselt ${length} eset',
};

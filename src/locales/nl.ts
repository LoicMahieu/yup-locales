/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} is ongeldig.',
  required: '${path} is een vereist veld',
  defined: '${path} moet worden gedefinieerd',
  notNull: '${path} kan niet nul zijn',
  oneOf: '${path} Moet een van de volgende waarden zijn: ${values}',
  notOneOf: '${path} mag niet een van de volgende waarden zijn: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} moet een \`${type}\` type zijn, ` +
      `Maar de uiteindelijke waarde was: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (gegoten uit de waarde \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Als "null" bedoeld is als een lege waarde, moet u het schema markeren als` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} moet precies ${length} tekens zijn',
  min: '${path} moet op zijn minst ${min} tekens zijn',
  max: '${path} moet maximaal ${max} tekens zijn',
  matches: '${path} moet het volgende overeenkomen: "${regex}"',
  email: '${path} Moet een geldige e -mail zijn',
  url: '${path} Moet een geldige URL zijn',
  uuid: '${path} Moet een geldige uuid zijn',
  trim: '${path} Moet een getrimde string zijn',
  lowercase: '${path} Moet een kleine letters zijn',
  uppercase: '${path} Moet een hoofdstreek zijn',
};

export const number: LocaleObject['number'] = {
  min: '${path} moet groter zijn dan of gelijk zijn aan ${min}',
  max: '${path} moet kleiner zijn dan of gelijk zijn aan ${max}',
  lessThan: '${path} moet minder zijn dan ${less}',
  moreThan: '${path} moet groter zijn dan ${more}',
  positive: '${path} Moet een positief getal zijn',
  negative: '${path} moet een negatief getal zijn',
  integer: '${path} moet een geheel getal zijn',
};

export const date: LocaleObject['date'] = {
  min: '${path} Veld moet later zijn dan ${min}',
  max: '${path} Veld moet eerder zijn dan ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Veld moet ${value} zijn',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} Veld kan geen sleutels hebben die niet in de objectvorm zijn opgegeven',
};

export const array: LocaleObject['array'] = {
  min: '${path} Veld moet ten minste ${min} items hebben',
  max: '${path} Veld moet minder dan of gelijk hebben aan ${max} items',
  length: '${path} moet ${length} items hebben',
};

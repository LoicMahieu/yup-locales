/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} is ongeldig.',
  required: '${path} is een vereist veld',
  defined: '${path} moet worden gedefinieerd',
  notNull: '${path} kan niet leeg zijn',
  oneOf: '${path} moet een van de volgende waarden zijn: ${values}',
  notOneOf: '${path} mag niet een van de volgende waarden zijn: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} moet een \`${type}\` type zijn, ` +
      `maar de uiteindelijke waarde was: \`${printValue(value, true)}\`` +
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
  matches: '${path} moet overeenkomen met: "${regex}"',
  email: '${path} moet een geldige e-mail zijn',
  url: '${path} moet een geldige URL zijn',
  uuid: '${path} moet een geldige uuid zijn',
  trim: '${path} mag geen begin- of eindspaties bevatten',
  lowercase: '${path} mag alleen bestaan uit kleine letters',
  uppercase: '${path} mag alleen bestaan uit hoofdletters',
};

export const number: LocaleObject['number'] = {
  min: '${path} moet groter zijn dan of gelijk zijn aan ${min}',
  max: '${path} moet kleiner zijn dan of gelijk zijn aan ${max}',
  lessThan: '${path} moet minder zijn dan ${less}',
  moreThan: '${path} moet groter zijn dan ${more}',
  positive: '${path} moet een positief getal zijn',
  negative: '${path} moet een negatief getal zijn',
  integer: '${path} moet een geheel getal zijn',
};

export const date: LocaleObject['date'] = {
  min: '${path} veld moet later zijn dan ${min}',
  max: '${path} veld moet eerder zijn dan ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} veld moet ${value} zijn',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} mag geen waarden bevatten die niet zijn opgegeven in het object',
};

export const array: LocaleObject['array'] = {
  min: '${path} veld moet ten minste ${min} items bevatten',
  max: '${path} veld mag niet meer dan ${max} items bevatten',
  length: '${path} moet ${length} items hebben',
};

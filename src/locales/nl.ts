/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} is ongeldig.',
  required: '${path} is een verplicht veld',
  oneOf: '${path} moet één van de volgende waarden zijn: ${values}',
  notOneOf: '${path} mag niet een van de volgende waarden zijn: ${values}: ',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} moet een \`${type}\` zijn, ` +
      `maar de uiteindelijke waarde was: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (gegoten uit de waarde \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Als "null" is bedoeld als een lege waarde moet u het schema markeren als` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} moet precies ${length} karakters lang zijn',
  min: '${path} moet minimaal ${min} karakters bevatten',
  max: '${path} mag maximaal ${max} tekens bevatten',
  matches: '${path} moet overeenkomen met het volgende: "${regex}"',
  email: '${path} moet een geldig e-mailadres zijn',
  url: '${path} moet een geldige URL zijn',
  trim: '${path} mag geen begin- of eindspaties bevatten',
  lowercase: '${path} mag alleen bestaan uit kleine letters',
  uppercase: '${path} mag alleen bestaan uit hoofdletters',
};

export const number: LocaleObject['number'] = {
  min: '${path} moet groter dan of gelijk zijn aan ${min}',
  max: '${path} moet lager dan of gelijk zijn aan ${max}',
  lessThan: '${path} moet lager zijn dan ${less}',
  moreThan: '${path} moet hoger zijn dan ${more}',
  notEqual: '${path} mag niet gelijk zijn aan ${notEqual}',
  positive: '${path} moet een positief getal zijn',
  negative: '${path} moet negatief getal zijn',
  integer: '${path} moet een getal zijn',
};

export const date: LocaleObject['date'] = {
  min: '${path} moet later dan ${min} zijn',
  max: '${path} moet eerder dan ${max} zijn',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} mag geen waarden bevatten die niet zijn opgegeven in het object',
};

export const array: LocaleObject['array'] = {
  min: '${path} moet ten minste ${min} items bevatten',
  max: '${path} moet minder of gelijk zijn aan ${max} items',
};

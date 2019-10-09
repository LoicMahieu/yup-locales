/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { NotTypeArgs } from 'util/types';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js

export let mixed = {
  default: '${path} is ongeldig.',
  required: '${path} is een verplicht veld',
  oneOf: '${values}: ${path} moet een van de volgende waarden',
  notOneOf: '${values}: ${path} niet een van de volgende waarden',
  notType: ({ path, type, value, originalValue }: NotTypeArgs) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} moet \`${type}\` type, ` +
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

export let string = {
  length: '${path} moet zijn precies ${length} tekens',
  min: '${path} moet minimaal ${min} karakters',
  max: '${path} mag maximaal ${max} tekens',
  matches: '${path} moet overeenkomen met het volgende: "${regex}"',
  email: '${path} moet een geldig e-mailadres',
  url: '${path} moet een geldige URL zijn',
  trim: '${path} moet worden bijgesneden tekenreeks',
  lowercase: '${path} moet een kleine tekenreeks zijn',
  uppercase: '${path} moet hoofdletters tekenreeks',
};

export let number = {
  min: '${path} groter dan of gelijk aan ${min} be',
  max: '${path} moet lager dan of gelijk aan ${max} be',
  lessThan: '${path} mag maximaal ${less} be',
  moreThan: '${path} groter dan ${more} be',
  notEqual: '${path} niet gelijk zijn aan ${notEqual} be',
  positive: '${path} moet een positief getal zijn',
  negative: '${path} moet negatief getal zijn',
  integer: '${path} moet een geheel getal zijn',
};

export let date = {
  min: '${path} -veld moet meer dan ${min}',
  max: '${path} -veld moet eerder dan ${max}',
};

export let boolean = {};

export let object = {
  noUnknown:
    '${path} -veld kunnen sleutels niet in de objectvorm worden opgegeven',
};

export let array = {
  min: '${path} veld moet ten minste ${min} items',
  max: '${path} -veld moet lager zijn dan of gelijk zijn ${max} artikelen',
};

/*eslint-disable no-template-curly-in-string*/
/**
 * This work is derived from skress/yup-locale-de.
 * https://github.com/skress/yup-locale-de/
 */

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} ist ungültig',
  required: '${path} ist ein Pflichtfeld',
  oneOf: '${path} muss einem der folgenden Werte entsprechen: ${values}',
  notOneOf: '${path} darf keinem der folgenden Werte entsprechen: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} muss vom Typ \`${type}\` sein, ` +
      `aber der Wert war: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (gecastet aus dem Wert \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg += `\n Wenn "null" als leerer Wert gedacht ist, müssen Sie das Schema als \`.nullable()\` markieren.`;
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} muss genau ${length} Zeichen lang sein',
  min: '${path} muss mindestens ${min} Zeichen lang sein',
  max: '${path} darf höchstens ${max} Zeichen lang sein',
  matches: '${path} muss wie folgt aussehen: "${regex}"',
  email: '${path} muss eine gültige E-Mail-Adresse enthalten',
  url: '${path} muss eine gültige URL sein',
  trim: '${path} darf keine Leerzeichen am Anfang oder Ende enthalten',
  lowercase: '${path} darf nur Kleinschreibung enthalten',
  uppercase: '${path} darf nur Großschreibung enthalten',
};

export const number: LocaleObject['number'] = {
  min: '${path} muss größer oder gleich ${min} sein',
  max: '${path} muss kleiner oder gleich ${max} sein',
  lessThan: '${path} muss kleiner sein als ${less}',
  moreThan: '${path} muss größer sein als ${more}',
  positive: '${path} muss eine positive Zahl sein',
  negative: '${path} muss eine negative Zahl sein',
  integer: '${path} muss eine ganze Zahl sein',
};

export const date: LocaleObject['date'] = {
  min: '${path} muss später sein als ${min}',
  max: '${path} muss früher sein als ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path}-Feld darf keine Schlüssel verwenden, die nicht im "Objekt-Shape" definiert wurden',
};

export const array: LocaleObject['array'] = {
  min: '${path}-Feld muss mindesten ${min} Einträge haben',
  max: '${path}-Feld darf höchstens ${max} Einträge haben',
};

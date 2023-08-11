/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} ist ungültig.',
  required: '${path} ist ein erforderliches Feld',
  defined: '${path} muss definiert werden',
  notNull: '${path} kann nicht null sein',
  oneOf: '${path} muss einer der folgenden Werte sein: ${values}',
  notOneOf: '${path} darf nicht einer der folgenden Werte sein: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} Muss ein \`${type}\` Typ sein, ` +
      `Aber der Endwert war: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (aus dem Wert \`${printValue(originalValue, true)}\` \`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Wenn "null" als leerer Wert gedacht ist, markieren Sie das Schema als` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} muss genau ${length} Zeichen sein',
  min: '${path} muss mindestens ${min} Zeichen sein',
  max: '${path} muss höchstens ${max} Zeichen sein',
  matches: '${path} muss Folgendes übereinstimmen: "${regex}"',
  email: '${path} Muss eine gültige E -Mail sein',
  url: '${path} Muss eine gültige URL sein',
  uuid: '${path} muss ein gültiges UUID sein',
  trim: '${path} Muss eine abgeschnittene Zeichenfolge sein',
  lowercase: '${path} Muss eine Kleinbuchstabe sein',
  uppercase: '${path} Muss eine obere Fallstring sein',
};

export const number: LocaleObject['number'] = {
  min: '${path} muss größer sein als oder gleich ${min}',
  max: '${path} muss geringer sein als oder gleich ${max}',
  lessThan: '${path} muss geringer sein als ${less}',
  moreThan: '${path} muss größer sein als ${more}',
  positive: '${path} muss eine positive Zahl sein',
  negative: '${path} muss eine negative Zahl sein',
  integer: '${path} muss eine Ganzzahl sein',
};

export const date: LocaleObject['date'] = {
  min: '${path} Das Feld muss später als ${min} sein',
  max: '${path} Das Feld muss früher als ${max} sein',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Feld muss sein ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} Das Feld kann keine Schlüssel nicht in der Objektform angegeben haben',
};

export const array: LocaleObject['array'] = {
  min: '${path} Feld muss mindestens ${min} Artikel haben',
  max: '${path} Feld muss weniger als oder gleich ${max} Artikel haben',
  length: '${path} muss ${length} Artikel haben',
};

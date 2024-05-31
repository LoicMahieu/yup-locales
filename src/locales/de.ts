/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} ist ungültig.',
  required: '${path} ist ein Pflichtfeld',
  defined: '${path} muss definiert werden',
  notNull: '${path} darf nicht leer sein',
  oneOf: '${path} muss einer der folgenden Werte sein: ${values}',
  notOneOf: '${path} darf nicht einer der folgenden Werte sein: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} muss ein \`${type}\` Typ sein, ` +
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
  length: '${path} muss genau ${length} Zeichen lang sein',
  min: '${path} muss mindestens ${min} Zeichen lang sein',
  max: '${path} darf höchstens ${max} Zeichen lang sein',
  matches: '${path} muss folgendes Muster haben: "${regex}"',
  email: '${path} muss eine gültige E-Mail-Adresse sein',
  url: '${path} muss eine gültige URL sein',
  uuid: '${path} muss eine gültige UUID sein',
  trim: '${path} muss eine Zeichenfolge ohne Leerzeichen sein',
  lowercase: '${path} muss in Kleinbuchstaben geschrieben sein',
  uppercase: '${path} muss in Großbuchstaben geschrieben sein',
};

export const number: LocaleObject['number'] = {
  min: '${path} muss größer oder gleich ${min} sein',
  max: '${path} muss geringer oder gleich ${max} sein',
  lessThan: '${path} muss kleiner als ${less} sein',
  moreThan: '${path} muss größer als ${more} sein',
  positive: '${path} muss eine positive Zahl sein',
  negative: '${path} muss eine negative Zahl sein',
  integer: '${path} muss eine ganze Zahl sein',
};

export const date: LocaleObject['date'] = {
  min: '${path} muss nach ${min} sein',
  max: '${path} muss vor ${max} sein',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} muss ${value} sein',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} kann keine unbekannten Werte enthalten',
};

export const array: LocaleObject['array'] = {
  min: '${path} muss mindestens ${min} Einträge haben',
  max: '${path} darf höchstens ${max} Einträge haben',
  length: '${path} muss ${length} Einträge haben',
};

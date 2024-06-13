/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} on virheellinen.',
  required: '${path} on vaadittu kenttä',
  defined: '${path} on määriteltävä',
  notNull: '${path} ei voi olla tyhjä',
  oneOf: '${path} on oltava yksi seuraavista arvoista: ${values}',
  notOneOf: '${path} ei saa olla yksi seuraavista arvoista: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} on oltava \`${type}\` tyyppi, ` +
      `Mutta lopullinen arvo oli: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (valettu arvosta \`${printValue(originalValue, true)}\` \`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Jos "nolla" on tarkoitettu tyhjäksi arvoksi, muista merkitä kaavio` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} on oltava tarkalleen ${length} merkkejä',
  min: '${path} on oltava ainakin ${min} merkkejä',
  max: '${path} on oltava korkeintaan ${max} merkkejä',
  matches: '${path} on vastattava seuraavaa: "${regex}"',
  email: '${path} on oltava kelvollinen sähköposti',
  url: '${path} on oltava kelvollinen URL -osoite',
  uuid: '${path} on oltava kelvollinen UUID',
  trim: '${path} on oltava leikattu merkkijono',
  lowercase: '${path} on oltava pieni merkkijono',
  uppercase: '${path} on oltava isot merkkijono',
};

export const number: LocaleObject['number'] = {
  min: '${path} on oltava suurempi tai yhtä suuri kuin ${min}',
  max: '${path} on oltava pienempi tai yhtä suuri kuin ${max}',
  lessThan: '${path} on oltava vähemmän kuin ${less}',
  moreThan: '${path} on oltava suurempi kuin ${more}',
  positive: '${path} on oltava positiivinen luku',
  negative: '${path} on oltava negatiivinen luku',
  integer: '${path} on oltava kokonaisluku',
};

export const date: LocaleObject['date'] = {
  min: '${path} kentän on oltava myöhemmin kuin ${min}',
  max: '${path} kentän on oltava aikaisemmin kuin ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} kentän on oltava ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} kentällä ei voi olla avaimia, joita ei ole määritetty objektin muodossa',
};

export const array: LocaleObject['array'] = {
  min: '${path} kentällä on oltava vähintään ${min} kohteita',
  max: '${path} kentällä on oltava vähemmän tai yhtä suuret kuin ${max}',
  length: '${path} on oltava ${length} esineitä',
};

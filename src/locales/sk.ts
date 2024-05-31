/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} je neplatný.',
  required: '${path} je požadované pole',
  defined: '${path} sa musí definovať',
  notNull: '${path} nemôže byť null',
  oneOf: '${path} musí byť jednou z nasledujúcich hodnôt: ${values}',
  notOneOf: '${path} nesmie byť jednou z nasledujúcich hodnôt: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} musí byť \`${type}\`, ` +
      `ale konečná hodnota bola: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (odliatok z hodnoty \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Ak je „null“ určený ako prázdna hodnota, nezabudnite označiť schému ako` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} musia byť presne ${length} znaky',
  min: '${path} musia byť aspoň ${min} znaky',
  max: '${path} musia byť nanajvýš ${max} znaky',
  matches: '${path} sa musí zhodovať s nasledujúcimi: „${regex}“',
  email: '${path} musí byť platný e-mail',
  url: '${path} musí byť platná adresa URL',
  uuid: '${path} musí byť platný uuid',
  trim: '${path} musí byť orezaný reťazec',
  lowercase: '${path} musí byť malý reťazec',
  uppercase: '${path} Musí to byť strun s vyšším písmom',
};

export const number: LocaleObject['number'] = {
  min: '${path} musí byť väčší alebo rovný ${min}',
  max: '${path} musí byť menšie alebo rovné ${max}',
  lessThan: '${path} musí byť menej ako ${less}',
  moreThan: '${path} musí byť väčší ako ${more}',
  positive: '${path} musí byť kladné číslo',
  negative: '${path} musí byť záporné číslo',
  integer: '${path} musí byť celé číslo',
};

export const date: LocaleObject['date'] = {
  min: '${path} pole musí byť neskôr ako ${min}',
  max: '${path} Pole musí byť skôr ako ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} pole musí byť ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} Pole nemôže mať kľúče zadané v tvare objektu',
};

export const array: LocaleObject['array'] = {
  min: '${path} pole musí mať aspoň ${min} položky',
  max: '${path} pole musí mať menej ako položky ${max}',
  length: '${path} musia mať položky ${length}',
};

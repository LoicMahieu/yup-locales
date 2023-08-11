/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} je neplatný.',
  required: '${path} je požadované pole',
  defined: '${path} Musí být definováno',
  notNull: '${path} nemůže být null',
  oneOf: '${path} musí být jednou z následujících hodnot: ${values}',
  notOneOf: '${path} nesmí být jednou z následujících hodnot: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} musí být typ \`${type}\`, ` +
      `Ale konečná hodnota byla: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (obsazení z hodnoty \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Pokud je „null“ určen jako prázdná hodnota, nezapomeňte schéma označit jako` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} musí být přesně ${length} znaky',
  min: '${path} musí být alespoň ${min} znaky',
  max: '${path} musí být nejvýše ${max} znaky',
  matches: '${path} musí odpovídat následujícím: „${regex}“',
  email: '${path} Musí to být platný e -mail',
  url: '${path} musí být platná adresa URL',
  uuid: '${path} musí být platný uuid',
  trim: '${path} musí být oříznutá řetězec',
  lowercase: '${path} Musí to být řetězec s malým písmenem',
  uppercase: '${path} Musí to být řetězec horního pouzdra',
};

export const number: LocaleObject['number'] = {
  min: '${path} musí být větší nebo roven ${min}',
  max: '${path} musí být menší nebo roven ${max}',
  lessThan: '${path} musí být menší než ${less}',
  moreThan: '${path} musí být větší než ${more}',
  positive: '${path} musí být kladné číslo',
  negative: '${path} musí být záporné číslo',
  integer: '${path} musí být celé číslo',
};

export const date: LocaleObject['date'] = {
  min: '${path} Pole musí být později než ${min}',
  max: '${path} Pole musí být dříve než ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Pole musí být ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} Pole nemůže mít klíče, které nejsou uvedeny ve tvaru objektu',
};

export const array: LocaleObject['array'] = {
  min: '${path} Pole musí mít alespoň ${min} položky',
  max: '${path} Pole musí mít menší nebo rovné položky ${max}',
  length: '${path} Musí mít ${length} položky',
};

/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} är ogiltig.',
  required: '${path} är ett obligatoriskt fält',
  defined: '${path} måste definieras',
  notNull: '${path} kan inte vara noll',
  oneOf: '${path} måste vara ett av följande värden: ${values}',
  notOneOf: '${path} får inte vara ett av följande värden: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} måste vara en typ "${type}\`, ` +
      `Men det slutliga värdet var: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (gjutet från värdet \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Om "null" är avsett som ett tomt värde måste du markera schemat som` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} måste vara exakt ${length} tecken',
  min: '${path} måste vara minst ${min} tecken',
  max: '${path} måste vara högst ${max} tecken',
  matches: '${path} måste matcha följande: "${regex}"',
  email: '${path} måste vara ett giltigt e -postmeddelande',
  url: '${path} måste vara en giltig URL',
  uuid: '${path} måste vara en giltig UUID',
  trim: '${path} måste vara en trimmad sträng',
  lowercase: '${path} måste vara en små bokstäver',
  uppercase: '${path} Måste vara en stora sträng',
};

export const number: LocaleObject['number'] = {
  min: '${path} måste vara större än eller lika med ${min}',
  max: '${path} måste vara mindre än eller lika med ${max}',
  lessThan: '${path} måste vara mindre än ${less}',
  moreThan: '${path} måste vara större än ${more}',
  positive: '${path} måste vara ett positivt tal',
  negative: '${path} måste vara ett negativt tal',
  integer: '${path} måste vara ett heltal',
};

export const date: LocaleObject['date'] = {
  min: '${path} Fältet måste vara senare än ${min}',
  max: '${path} Fältet måste vara tidigare än ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} Fältet måste vara ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} Fältet kan inte ha nycklar som inte anges i objektformen',
};

export const array: LocaleObject['array'] = {
  min: '${path} fältet måste ha minst ${min} föremål',
  max: '${path} fältet måste ha mindre än eller lika med ${max} föremål',
  length: '${path} måste ha ${length} föremål',
};

/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} er ógilt.',
  required: '${path} er nauðsynlegur reitur',
  defined: '${path} verður að vera skilgreindur',
  notNull: '${path} verður ekki að vera null',
  oneOf: '${path} verður að vera eitt af eftirfarandi gildum: ${values}',
  notOneOf: '${path} má ekki vera eitt af eftirfarandi gildum: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} verður að vera \`${type}\` gerð, ` +
      `en lokagildið var: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (varpað úr gildinu \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\nEf „null“ er ætlað sem tómt gildi, vertu viss um að merkja reitinn sem` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} verður að vera nákvæmlega ${length} stafir',
  min: '${path} verður að vera að minnsta kosti ${min} stafir',
  max: '${path} verður að vera í mesta lagi ${max} stafir',
  matches: '${path} verður að passa eftirfarandi: "${regex}"',
  email: '${path} verður að vera gildur tölvupóstur',
  url: '${path} verður að vera gilt URL',
  uuid: '${path} verður að vera gilt UUID',
  trim: '${path} verður að vera skornur strengur',
  lowercase: '${path} verður að vera lágstafa strengur',
  uppercase: '${path} verður að vera stórstafa strengur',
};

export const number: LocaleObject['number'] = {
  min: '${path} verður að vera meiri en eða jafnt ${min}',
  max: '${path} verður að vera minna en eða jafnt ${max}',
  lessThan: '${path} verður að vera minna en ${less}',
  moreThan: '${path} verður að vera meiri en ${more}',
  positive: '${path} verður að vera jákvæð tala',
  negative: '${path} verður að vera neikvæð tala',
  integer: '${path} verður að vera heiltala',
};

export const date: LocaleObject['date'] = {
  min: '${path} reitur verður að vera seinna en ${min}',
  max: '${path} reitur verður að vera áðan en ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} reitur verður að vera ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown:
    '${path} reitur getur ekki haft lykla sem ekki eru tilgreindir í hlutnum',
};

export const array: LocaleObject['array'] = {
  min: '${path} reitur verður að hafa að minnsta kosti ${min} hluti',
  max: '${path} reitur verður að hafa minna en eða jafnt og ${max} hluti',
  length: '${path} verður að hafa ${length} hluti',
};

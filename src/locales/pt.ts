/*eslint-disable no-template-curly-in-string*/

import { printValue, LocaleObject } from 'yup';

// Based on https://github.com/jquense/yup/blob/b940eef48eb7456622ae384d0ffa7363d4fbad25/src/locale.ts
export const mixed: LocaleObject['mixed'] = {
  default: '${path} é inválido.',
  required: '${path} é obrigatório',
  defined: '${path} não deve ser indefinido',
  notNull: '${path} não pode ser vazio',
  oneOf: '${path} deve ter um dos seguintes valores: ${values}',
  notOneOf: '${path} não deve ter nenhum dos seguintes valores: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} deve ser do tipo \`${type}\`, ` +
      `mas o valor final foi: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (cast do valor \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        '\n Se a intenção era usar "null" como um valor em branco marque o esquema como `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: ({ path, length }) =>
    `${path} deve ter exatamente ${length} ${
      length === 1 ? 'caractere' : 'caracteres'
    }`,
  min: ({ path, min }) =>
    `${path} deve ter no mínimo ${min} ${
      min === 1 ? 'caractere' : 'caracteres'
    }`,
  max: ({ path, max }) =>
    `${path} deve ter no máximo ${max} ${
      max === 1 ? 'caractere' : 'caracteres'
    }`,
  matches: '${path} deve corresponder ao padrão: "${regex}"',
  email: '${path} deve ser um e-mail válido',
  url: '${path} deve ser uma URL válida',
  uuid: '${path} deve ser um UUID válido',
  trim: '${path} não deve conter espaços no início nem no fim',
  lowercase: '${path} deve estar em letras minúsculas',
  uppercase: '${path} deve estar em letras maiúsculas',
};

export const number: LocaleObject['number'] = {
  min: '${path} deve ser maior ou igual a ${min}',
  max: '${path} deve ser menor ou igual a ${max}',
  lessThan: '${path} deve ser menor que ${less}',
  moreThan: '${path} deve ser maior que ${more}',
  positive: '${path} deve ser um número positivo',
  negative: '${path} deve ser um número negativo',
  integer: '${path} deve ser um número inteiro',
};

export const date: LocaleObject['date'] = {
  min: '${path} deve ser posterior a ${min}',
  max: '${path} deve ser anterior a ${max}',
};

export const boolean: LocaleObject['boolean'] = {
  isValue: '${path} deve ser ${value}',
};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} tem chaves desconhecidas: ${unknown}',
};

export const array: LocaleObject['array'] = {
  min: ({ path, min }) =>
    `${path} deve ter no mínimo ${min} ${min === 1 ? 'item' : 'itens'}`,
  max: ({ path, max }) =>
    `${path} deve ter no máximo ${max} ${max === 1 ? 'item' : 'itens'}`,
  length: ({ path, length }) =>
    `${path} deve ter ${length} ${length === 1 ? 'item' : 'itens'}`,
};

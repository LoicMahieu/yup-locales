const translate = require('@vitalets/google-translate-api');
const { writeFile } = require('fs-extra');
const { join } = require('path');
const prettier = require('prettier');

const dest = join(__dirname, '../src/locales');

const run = async () => {
  const locale = process.argv[2];

  console.log(`Create locale file for \`${locale}\`...`);

  await writeFile(
    join(dest, `${locale}.ts`),
    prettier.format(await translateLocale(locale), {
      printWidth: 80,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      parser: 'typescript',
    })
  );
};

const translateLocale = async to => {
  const t = async value => {
    const values = [];

    value = value.replace(/\${([^}]+)}/g, (_, value) => {
      const index = values.push(value);
      return '[__' + index + '__]';
    });

    value = await (await translate(value, {
      to,
      from: 'en',
    })).text;

    value = value.replace(/\[__([^__\]]+)__]/g, (_, index) => {
      const value = values[index - 1];
      return '${' + value + '}';
    });
    value = value.replace(/'/g, "\\'");
    value = value.replace(/`/g, '\\`');

    return value;
  };

  return `
/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${await t('${path} is invalid.')}',
  required: '${await t('${path} is a required field')}',
  oneOf: '${await t('${path} must be one of the following values: ${values}')}',
  notOneOf: '${await t(
    '${path} must not be one of the following values: ${values}'
  )}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      \`${await t('${path} must be a `${type}` type')}, \` +
      \`${await t('but the final value was: `${printValue(value, true)}`')}\` +
      (isCast
        ? \` (${await t(
          'cast from the value `${printValue(originalValue, true)}`'
        )}).\`
        : '.');

    if (value === null) {
      msg += \`\\n ${await t(
        'If "null" is intended as an empty value be sure to mark the schema as'
      )}\` + ' \`.nullable()\`';
    }

    return msg;
  },
};

export const string: LocaleObject["string"] = {
  length: '${await t('${path} must be exactly ${length} characters')}',
  min: '${await t('${path} must be at least ${min} characters')}',
  max: '${await t('${path} must be at most ${max} characters')}',
  matches: '${await t('${path} must match the following: "${regex}"')}',
  email: '${await t('${path} must be a valid email')}',
  url: '${await t('${path} must be a valid URL')}',
  trim: '${await t('${path} must be a trimmed string')}',
  lowercase: '${await t('${path} must be a lowercase string')}',
  uppercase: '${await t('${path} must be a upper case string')}',
};

export const number: LocaleObject["number"] = {
  min: '${await t('${path} must be greater than or equal to ${min}')}',
  max: '${await t('${path} must be less than or equal to ${max}')}',
  lessThan: '${await t('${path} must be less than ${less}')}',
  moreThan: '${await t('${path} must be greater than ${more}')}',
  positive: '${await t('${path} must be a positive number')}',
  negative: '${await t('${path} must be a negative number')}',
  integer: '${await t('${path} must be an integer')}',
};

export const date: LocaleObject["date"] = {
  min: '${await t('${path} field must be later than ${min}')}',
  max: '${await t('${path} field must be at earlier than ${max}')}',
};

export const boolean: LocaleObject["boolean"] = {};

export const object: LocaleObject["object"] = {
  noUnknown: '${await t(
    '${path} field cannot have keys not specified in the object shape'
  )}',
};

export const array: LocaleObject["array"] = {
  min: '${await t('${path} field must have at least ${min} items')}',
  max: '${await t(
    '${path} field must have less than or equal to ${max} items'
  )}',
};
`;
};

run();

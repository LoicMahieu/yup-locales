import { LocaleObject } from 'yup';
import printValue from '../util/printValue';

const mixed: LocaleObject['mixed'] = {
  default: ({ path }) => `${path}は正しくありません。`,
  required: ({ path }) => `${path}が必要です。`,
  defined: ({ path }) => `${path}をundefinedにすることはできません。`,
  oneOf: ({ path, values }) => `${path}は${values}の中から入力してください。`,
  notOneOf: ({ path, values }) => `${path}は${values}意外入力してください。`,
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path}が\`${type}\`ではありません、, ` +
      `しかし、最終的な値は: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (\`${printValue(originalValue, true)}\`)値からキャストする。`
        : '.');

    if (value === null) {
      msg += `\n「null」が空の値として意図されている場合は、必ずスキーマを\`.nullable()\`に設定してください。 `;
    }

    return msg;
  },
};

const string: LocaleObject['string'] = {
  length: ({ path, length }) =>
    `${path}は${length}文字の文字列である必要があります。`,
  min: ({ path, min }) =>
    `${path}は${min}文字以上の文字列である必要があります。`,
  max: ({ path, max }) =>
    `${path}は${max}文字以下の文字列である必要があります。`,
  matches: ({ path }) => `${path}の入力形式が間違っています。`,
  email: ({ path }) => `${path}はメールの形式で入力してください。`,
  url: ({ path }) => `${path}はURLの形式で入力してください。`,
  uuid: ({ path }) => `${path}はUUIDの形式で入力してください。`,
  trim: ({ path }) => `${path}はトリミングされた文字列である必要があります。`,
  lowercase: ({ path }) => `${path}は小文字の文字列である必要があります。`,
  uppercase: ({ path }) => `${path}は大文字の文字列である必要があります。`,
};

const number: LocaleObject['number'] = {
  min: ({ path, min }) => `${path}は${min}以上の数値である必要があります。`,
  max: ({ path, max }) => `${path}は${max}以下の数値である必要があります。`,
  lessThan: ({ path, less }) =>
    `${path}は${less}より小さな数値である必要があります。`,
  moreThan: ({ path, more }) =>
    `${path}は${more}より大きな数値である必要があります。`,
  positive: ({ path, more }) =>
    `${path}は${more}より小さな数値である必要があります。`,
  negative: ({ path, less }) =>
    `${path}は${less}より大きな数値である必要があります。`,
  integer: ({ path }) => `${path}は整数である必要があります。`,
};

const date: LocaleObject['date'] = {
  min: ({ path, min }) => `${path}は${min}以降の日時である必要があります。`,
  max: ({ path, max }) => `${path}は${max}以前の日時である必要があります。`,
};

const boolean: LocaleObject['boolean'] = {};

const object: LocaleObject['object'] = {
  noUnknown: ({ path }) =>
    `${path}フィールドにオブジェクトで指定されていないキーを含めることはできません。`,
};

const array: LocaleObject['array'] = {
  min: ({ path, min }) => `${path}に${min}個以上の要素である必要があります。`,
  max: ({ path, max }) => `${path}に${max}個以下の要素である必要があります。`,
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};

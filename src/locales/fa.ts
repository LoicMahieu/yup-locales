import { printValue, LocaleObject } from 'yup';

export let mixed: Required<LocaleObject['mixed']> = {
  default: '${path} معتبر نیست',
  required: 'وارد کردن ${path} الزامی است',
  defined: '${path} باید تعریف شده باشد',
  notNull: '${path} نمی‌تواند مقدار تهی (null) داشته باشد',
  oneOf: '${path} باید یکی از مقادیر زیر باشد: ${values}',
  notOneOf: '${path} نباید یکی از مقادیر زیر باشد: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    const castMsg =
      originalValue != null && originalValue !== value
        ? ` (تغییر یافته از مقدار \`${printValue(originalValue, true)}\`).`
        : '.';

    return type !== 'mixed'
      ? `${path} باید از نوع \`${type}\` باشد، ` +
          `اما مقدار نهایی وارد شده: \`${printValue(value, true)}\`` +
          castMsg
      : `${path} باید با نوع تنظیم شده مطابقت داشته باشد. ` +
          `مقدار بررسی شده: \`${printValue(value, true)}\`` +
          castMsg;
  },
};

export let string: Required<LocaleObject['string']> = {
  length: '${path} باید دقیقاً ${length} کاراکتر باشد',
  min: '${path} باید حداقل ${min} کاراکتر باشد',
  max: '${path} باید حداکثر ${max} کاراکتر باشد',
  matches: '${path} باید با الگوی مقابل مطابقت داشته باشد: "${regex}"',
  email: '${path} باید یک ایمیل معتبر باشد',
  url: '${path} باید یک آدرس وب (URL) معتبر باشد',
  uuid: '${path} باید یک شناسه (UUID) معتبر باشد',
  trim: '${path} نباید دارای فواصل خالی در ابتدا و انتها باشد',
  lowercase: '${path} باید به حروف کوچک باشد',
  uppercase: '${path} باید به حروف بزرگ باشد',
};

export let number: Required<LocaleObject['number']> = {
  min: '${path} باید بزرگتر یا مساوی ${min} باشد',
  max: '${path} باید کوچکتر یا مساوی ${max} باشد',
  lessThan: '${path} باید کمتر از ${less} باشد',
  moreThan: '${path} باید بیشتر از ${more} باشد',
  positive: '${path} باید عددی مثبت باشد',
  negative: '${path} باید عددی منفی باشد',
  integer: '${path} باید عدد صحیح باشد',
};

export let date: Required<LocaleObject['date']> = {
  min: '${path} باید بعد از تاریخ ${min} باشد',
  max: '${path} باید قبل از تاریخ ${max} باشد',
};

export let boolean: LocaleObject['boolean'] = {
  isValue: '${path} باید مقدار ${value} باشد',
};

export let object: Required<LocaleObject['object']> = {
  noUnknown: 'فیلد ${path} دارای کلیدهای تعریف نشده است: ${unknown}',
};

export let array: Required<LocaleObject['array']> = {
  min: '${path} باید حداقل شامل ${min} آیتم باشد',
  max: '${path} باید حداکثر شامل ${max} آیتم باشد',
  length: '${path} باید شامل ${length} آیتم باشد',
};

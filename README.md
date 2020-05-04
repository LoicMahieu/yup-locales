# yup-locales

Localizations for [jquense/yup](https://github.com/jquense/yup).

## Install

```
npm install -S yup-locales
```

## Usage

```js
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
setLocale(fr);
```

## Locales

Locales implemented:

  - `fr`
  - `nl`
  - `nb`
  - `ar`  

Please submit a PR with a new locale if you need it. In order to create a new locale, you could translate it automatically with `node scripts/create-locale` which will use google translate.

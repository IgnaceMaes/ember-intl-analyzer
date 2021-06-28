ember-intl-analyzer
==============================================================================

Find unused translations in your Ember.js projects


Usage
------------------------------------------------------------------------------

```bash
npx ember-intl-analyzer
```


Configuration
------------------------------------------------------------------------------

ember-intl-analyzer can be configured by creating a `config/ember-intl-analyzer.js`
file in your app:

```js
export default {
  whitelist: [
    /^countries\./,
    /^currency\./,
    /^validations\.errors\./,
    /^[^.]+\.warnings\.[^.]+$/,
  ],
};
```

### `whitelist`

If you use dynamic translations keys like this:
```js
this.intl.t(`countries.${code}`)
```
then ember-intl-analyzer can not easily understand what translation keys are
being used here. In that case it will ignore the dynamic translation key and
show the corresponding translations as unused.

To prevent that from happening you can configure a `whitelist`, which accepts an
array of regular expressions that will be checked when looking for unused
translations.

### `--fix`
If your application has a lot of unused translations you can run the command with
the `--fix` to remove them. Remember to double check your translations as dynamic
translations need to be whitelisted or they will be removed!

Caveats
------------------------------------------------------------------------------

There are a number of things that we do not support yet. Have a look at the
[Issues](https://github.com/simplabs/ember-intl-analyzer/issues) before using
this project.


Related
------------------------------------------------------------------------------

- [ember-intl](https://github.com/ember-intl/ember-intl) – Internationalization
  addon for Ember.js


License
------------------------------------------------------------------------------

This projects is developed by and &copy; [simplabs GmbH](http://simplabs.com)
and contributors. It is released under the [MIT License](LICENSE.md).

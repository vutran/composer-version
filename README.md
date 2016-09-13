# composer-version

> Command-line helper for [Composer](https://getcomposer.org) to bump versions similar to `npm version`.

Composer doesn't support a command to [bump the version](https://github.com/composer/composer/issues/4939) of your package easily. `composer-version` was created to replicate the feature of `npm version` to allow package publishers to quickly bump their package's version using [semver](http://semver.org/).

It simply creates a new git commit and tag based on the type. (`major`, `minor`, or `patch`).

## Install

```bash
$ npm install -g composer-version
```

## Usage

```
$ composer-version [major | minor | patch]
```

## License

MIT © [Vu Tran](https://github.com/vutran/)

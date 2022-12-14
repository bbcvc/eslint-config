# @bbcvc/eslint-config

[![npm](https://img.shields.io/npm/v/@bbcvc/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@bbcvc/eslint-config)
[![npm](https://img.shields.io/npm/dy/@bbcvc/eslint-config?color=0b73b4&label=)](https://npmjs.com/package/@bbcvc/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript, Vue out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @bbcvc/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@bbcvc"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ]
}
```

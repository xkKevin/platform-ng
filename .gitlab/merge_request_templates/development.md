# Contributing
Thanks for contributing to Zhijiang Visual Analytic Platform NG! Here are some guidelines to getting your merge request accepted.

### 1 Lint
- [ ] Make sure to pass the lint check in CI pipeline.

### 2 Check the development rules
For more detais: [development guide](../../docs/development-guide.md).

#### 2.1 File 
- [ ] File names.
- [ ] File overview comments.
- [ ] Documents and demos.

#### 2.2 Modules
- [ ] File extension
- [ ] Naming imports
- [ ] Cycles

#### 2.3 Language
- [ ] Variable: complex structure comments.
- [ ] Object: method shorthand.
- [ ] Object: enum.
- [ ] Class: private.
- [ ] Class: do not add or remove properties outside the `constructor`.
- [ ] Class: do not manipulate `prototype`
- [ ] Class: `getter` and `setter`
- [ ] Function: arrow functions.
- [ ] Function: rest parameter and spread operator.
- [ ] Control: loop.
- [ ] Exception: custom exception.

#### 2.4 Naming
- [ ] Identifiers: ASCII letters and digits, underscores, and dollar signs.
- [ ] Rationality: give a descriptive and reasonable name.
- [ ] Abbreviations: use with caution.
- [ ] Class: UpperCamelCase, nouns or noun phrases.
- [ ] Method: lowerCamelCase, verbs or verb phrases.
- [ ] Enum: UpperCamelCase, singular nouns, items in `CONSTANT_CASE`.
- [ ] Constant: `CONSTANT_CASE`, nouns or noun phrases, immutable.
- [ ] Others: lowerCamelCase.

#### 2.5 Vue.js
- [ ] Parent-child communication.
- [ ] Expression in template.
- [ ] Directive shorthands.
- [ ] Element selectors.

#### 2.6 Comments
- [ ] Top/file-level comments.
- [ ] Class/component comments.
- [ ] Function comments.
- [ ] Bloack comments.
- [ ] Variable comments.
- [ ] Deprecation comments.


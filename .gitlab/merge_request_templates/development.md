# Contributing
Thanks for contributing to Zhijiang Visual Analytic Platform NG! Here are some guidelines to getting your merge request accepted.

## This is a ...
- [x] New feature
- [ ] Other


## What's the background?

> 1. Describe the source of requirement.
> 2. Resolve what problem.


## Realization

> 1. Basic thought of solution and other optional proposal.
> 2. List final API realization and usage sample.
> 3. GIF or snapshot should be provided if includes UI/interactive modification.


## What's the affect?

> 1. Does this MR affect users? Which part will be affected?
> 2. Changelog.
> 3. Does this MR contains potential break change of other risk?


## Self Check before Merge (Lint)

For more detais: [development guide](../../docs/development-guide.md).

#### Lint

- [ ] Make sure to pass the lint check in CI pipeline.

#### File 

- [ ] File names.
- [ ] File overview comments.
- [ ] Documents and demos.

#### Modules

- [ ] File extension
- [ ] Naming imports
- [ ] Cycles

#### Language

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

#### Naming

- [ ] Identifiers: ASCII letters and digits, underscores, and dollar signs.
- [ ] Rationality: give a descriptive and reasonable name.
- [ ] Abbreviations: use with caution.
- [ ] Class: UpperCamelCase, nouns or noun phrases.
- [ ] Method: lowerCamelCase, verbs or verb phrases.
- [ ] Enum: UpperCamelCase, singular nouns, items in `CONSTANT_CASE`.
- [ ] Constant: `CONSTANT_CASE`, nouns or noun phrases, immutable.
- [ ] Others: lowerCamelCase.

#### Vue.js

- [ ] Parent-child communication.
- [ ] Expression in template.
- [ ] Directive shorthands.
- [ ] Element selectors.

#### Comments

- [ ] Top/file-level comments.
- [ ] Class/component comments.
- [ ] Function comments.
- [ ] Bloack comments.
- [ ] Variable comments.
- [ ] Deprecation comments.


## Additional Plan?

> If this MR relate other MRs. You can type here.


Sample: https://github.com/ant-design/ant-design/pull/14003
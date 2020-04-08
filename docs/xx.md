# TODO
- Most of format problem: 
  - Prettier
- A few format problem and code quality: 
  - Eslint
  - The following rules

# Google Guide
## File
- File names must be all `lowercase` and may include dashes (-).
- File overview

## Modules
### Imports 
- File extension must always be included.
- Don't import the same file multiple times.
- Naming imports
  - Module import names (`import * as name`) are lowerCamelCase names that are derived from the imported file name.
  - Default import names are derived from the imported file name and xxx.
  - Named imports should keep the same name. Renaming requires caution.
### Exports
- Use named exports in all code instead of default exports. Because importing modules require a name, which may lead to inconsistencies in naming across modules.
### Other
- Do not create cycles between ES module

## Language
### Variable
- One variable per declaration.
- Declared when needed, initialized as soon as possible.
- For complex variable structure, add comments.
### Array
- Do not use the Array constructor
### Object
- Do not use the Object constructor
- Do not mix quoted and unquoted keys
- Method shorthand
- Enums
### Class
- Private fields are started with `$_`
- Properties should never be added or removed after the constructor is finished.
- Do not manipulate `prototype`.
- JavaScript getter and setter properties are not recommended. They are difficult to reason about. Provide ordinary methods instead.
### Functions
- Arrow functions are prefered because they are more concise and simplify scoping `this`.
- Use a rest parameter instead of accessing `arguments`. Rest parameters are typed with a `...` prefix in their JSDoc. Meanwhile, spread operator (`...`) is also recommended.
### String
- Template literals are prefered for complex string concatenation.
### Control Structure
- Loop
  - `for ... of` loop is prefered when possible. 
  - `for ... in` loop may only be used on dict-style objects. Prefer `for ... of` and `Object.keys` over `for .. in` when possible.
- Exception
  - Always throw `Errors` or subclasses of `Error`, never throw string literals or other objects. Always use new when constructing an `Error`. This treatment extends to `Promise`.
  - Custom exceptions provide a great way to convey additional error information from functions. They should be defined and used wherever the native `Error` type is insufficient.
  - Prefer throwing exceptions over ad-hoc error-handling approaches.
  - Doing nothing in response to a caught exception is not correct. When it truly is appropriate to take no action in a catch block, the reason should be explained in a comment.
- Switch
  - `default` statement should always be included and be last.
- Operator
  - Prefer `===/!==` to `==/!=`

## Naming
- Identifiers: ASCII letters and digits, underscores, and dollar signs.
- Give a descriptive name. Do not worry about saving horizontal space.
- Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

```js
// Good
errorCount          // No abbreviation.
dnsConnectionIndex  // Most people know what "DNS" stands for.
referrerUrl         // Ditto for "URL".
customerId          // "Id" is both ubiquitous and unlikely to be misunderstood.

// Bad
n                   // Meaningless.
nErr                // Ambiguous abbreviation.
nCompConns          // Ambiguous abbreviation.
wgcConnections      // Only your group knows what this stands for.
pcReader            // Lots of things can be abbreviated "pc".
cstmrId             // Deletes internal letters.
kSecondsPerDay      // Do not use Hungarian notation.
```
- Class names: 
  - `UpperCamelCase`
  - Names are typically nouns or noun phrases.
- Method names: 
  - `lowerCamelCase`
  - Names for `$_private` methods must start with `$_`
  - Names are typically verbs or verb phrases.
- Enum names
  - `UpperCamelCase`
  - Names are typicall singular nouns. Individual items within the enum are named in `CONSTANT_CASE`
- Constant names
  - `CONSTANT_CASE`, all uppercase cases with words separated by underscores.
  - Names are typically nouns or noun phrases.
  - Deeply immutable variables are constants. The variable `const array = []` is not a constant.
  - Recommend [immutable-js](https://immutable-js.github.io/immutable-js/) from Facebook.
- Others
  - `lowerCamelCase`
  - Include non-constant field names, parameter names, local variable names, etc.
- Camel naming method 
  1. Covert from the phrase to plain ASCII.
  2. Divide the result into words.
    - If any word already has a conventionial camel case appearance, split it. (e.g., `'YouTube' -> 'You Tube'`)
  3. Then lowercase everything and uppercase only the first character.
  4. Finally, join.
```js
'XML HTTP request' -> 'XmlHttpRequest', not 'XMLHTTPRequest'
'new customer ID' -> 'newCustomerId', not 'newCustomerID'
'supports IPv6 on iOS' -> 'supportsIpv6OnIos', not 'supportsIPv6OnIOS'
'YouTube importer' -> 'YouTubeImporter', not 'YoutubeImporter'
```

## Comments
- Top/file-level comment style
```js
/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @package
 */
```

- Class comment style
```js
/**
 * Description of class
 * @implements {Iterable<string>}
 */
class MyFancyTarget extends EventTarget {
  /**
   * @param {string} arg1 An argument that makes this more interesting.
   * @param {Array<number>} arg2 List of numbers to be processed.
   */
  constructor(arg1, arg2) {
    // ...
  }
};
```

- Function comment style
  - Descriptions begin with a verb phrase that describes what the method does. 
  - In anonymous functions comments are generally optional.


```js
/**
* Add two numbers
* @param {number} num1 The first addend
* @param {number} num2 The second addend
* @returns {number} The result
*/
function add(num1,num2){
　　return num1 + num2
}
```

- Block comment style
```js
// xxx
// yyy
fun()
```

- Variable comment style
```js
/**
 * Some description.
 * @type {Array<number>}
 */
const data = []

/**
 * An enum with two options.
 * @enum {number}
 */
const Option = {
  /** The option used shall have been the first. */
  FIRST_OPTION: 1,
  /** The second among two options. */
  SECOND_OPTION: 2,
}
```

- Deprecation
  - Mark deprecated methods, classes or interfaces with @deprecated annotations. 
  - A deprecation comment must include simple, clear directions for people to fix their call sites.


## Vue.js
### Component
- Naming
  - Mutli-word
  - Base
  - Tightly coupled
```js
todolist/
|- index.vue
|- item.vue
|- item-button.vue
|- index.html
|- README.md
```

- Component options order
  1. `el`
  2. `name`, `parent`
  3. `functional`
  4. `delimiters`, `comments`
  5. `components`, `directives`, `filters`
  6. `extends`, `mixins`
  7. `inheritAttrs`, `model`, `props`/`propsData`
  8. `data`, `computed`
  9. `watch`, `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `activated`, `deactivated`, `beforeDestory`, `destroyed`
  10. `methods`
  11. `template`/`render`, `renderError`
- Common options order
  1. `name`
  2. `components`
  3. `props`/`propsData`
  4. `data`, `computed`
  5. `watch`, `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `activated`, `deactivated`, `beforeDestory`, `destroyed`
  6. `methods`

- Parent-child communication
  - Vuex, prop, and event, rather than `this.$parent`, `this.refs`


### Template
- Self-closing component
```js
// bad
<MyComponent></MyComponent>

// good
<MyComponent/>
```

- Multi-attribute component
```js
// bad
<MyComponent foo="a" bar="b" baz="c"/>

// good
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

- Expression
```js
// bad
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}

// good
{{ normalizedFullName }}

computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

- Directive shorthands (`:` for `v-bind:`, `@` for `v-on:` and `#` for `v-slot`) should be used always.
- Element attribute order
  1. `is`
  2. `v-for`
  3. `v-if`, `v-else-if`, `v-else`, `v-show`, `v-cloak`
  4. `v-pre`, `v-once`
  5. `id`
  6. `ref`, `key`
  7. `v-model`
  8. Other attributes (all unspecified bound & unbound attributes)
  9. `v-on`
  10. `v-html`, `v-text`


### Props
- Prop definitions should be as detailed as possible.
- Names: camelCase during declaration, but kebab-case in templates.
```js
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

### Style
- Element selectors should be avoided with `scoped`.
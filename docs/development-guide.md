# Development Guide
- Preface
  - We hope that our developers and reviewers consdier how to write beautiful code. It is as important as research because great research work needs landing and application to benefit others. In addition, excellent engineering ability is helpful for our career development.
  - Research is science while engineering is more like art. Great SDEs should pursue from usable to robust, reliable and tolerant code. [Recommended reading](https://zhuanlan.zhihu.com/p/25595871).
- Our configuration
  - [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are applied to unified the code format and ensure code quality when developing in our built-in hot-reload server. Note: automatic fix is turned off by default because we hope our developers understand which rules need attention. Based on your own situation, you could turn it on by modifying corresponding configuration in `webpack.config.js` and `package.json` (but not commit them to GitLab). For more details, check the configuration files `.eslintrc.json` and `.prettierrc.js`.
  - Further, a lot of advanced rules should also be followed to unify the code style. These rules could not be integrated into lint tools. Therefore, efforts should be taken by developers and reviewers. This type of rules is described as follow.

## 1 Files
1. File names must be all lowercase and may include dashes (-), but no additional punctuation (except for `App.vue`).
2. A file must include a top-level file overview consist of authors, description, usage, dependencies of the file.

Example
```js
/**
 * @fileoverview Utilities for handling textareas.
 * Provide a series of functions.
 * Based on d3.js, lodash.js.
 * @author crcrcry.hello@gmail.com (Ran Chen)
 */
```

3. Vue component names should be multi-word and tightly coupled.
4. Provide component documents in `README.md` and demos in `index.html`.

Example
```js
todolist/
|- index.vue
|- item.vue
|- item-button.vue
|- index.html
|- README.md
search-bar/
|- index.vue
|- navigation.vue
|- button.vue
|- index.html
|- README.md
```

## 2 Modules
1. File extension must always be included.
2. Naming imports
   1. Module import names (`import * as name`) should be lowerCamelCase names derived from the imported file names.
   2. Default import names are derived from the imported file names and follow [the naming rules](#4-naming) based on imported object types.
   3. Named imports should keep the same name. Renaming requires caution.
3. Do not create cycles between ES module.

Example
```js
import * as fileOne from '../file-one.js';

import MyClass from '../my-class.js'
import SimpleComponent from '../simple-component.vue'
import SearchBar from '../search-bar'

import { addTwoNumbers, mySqrt } from '../my-math.js'
import { SOME_CONSTANT } from '../constant.js'
```

## 3 Language
1. Variable
   1. Add comments for complex variable structure.
2. Object
   1. Method shorthand is preferred. But it may not be suitable for all situations.
   2. Enumerations are a kind of constant object and are preferred for some situations.

Example
```js
// Method shorthand is worse herein.
new Vue({
  render: (h) => h(App),
}).$mount('#app')

// Enumerations
const Option = {
  // The option used shall have been the first.
  FIRST_OPTION: 1,
  // The second among two options.
  SECOND_OPTION: 2,
};
```

3. Class
   1. Private fields should be started with `$_`.
   2. Properties should never be added or removed after the `constructor` is finished.
   3. Do not manipulate `prototype` directly, manipulate `class` instead.
   4. JavaScript `getter` and `setter` properties are not recommended. They are difficult to reason about. Provide ordinary methods instead.

Example
```js
class Foo {
  constructor() {}

  // private method
  $_computeBar() {}

  // public method
  getBar() {}
}
```

4. Function
   1. Arrow functions are prefered in most situations because they are more concise and simplify scoping `this`.
   2. Use a rest parameter instead of accessing `arguments`. Rest parameters are typed with a `...` prefix in function documents. Meanwhile, spread operator (`...`) is also recommended.
5. Control Structure
   1. Loop
      1. `for ... of` loop is prefered when possible. 
      2. `for ... in` loop may only be used on dict-style objects.
      3. Functional programming with high-order functions are recommended for clearer logic.
   2. Exception
      1. Custom exceptions provide a great way to convey additional error information from functions. They should be defined and used wherever the native `Error` type is insufficient.


## 4 Naming
1. Identifiers: ASCII letters and digits, underscores, and dollar signs.
2. Give a descriptive name. Do not worry about saving horizontal space.
3. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

Example
```js
// Bad
n                   // Meaningless.
nErr                // Ambiguous abbreviation.
nCompConns          // Ambiguous abbreviation.
wgcConnections      // Only your group knows what this stands for.
pcReader            // Lots of things can be abbreviated "pc".
cstmrId             // Deletes internal letters.
kSecondsPerDay      // Do not use Hungarian notation.

// Good
errorCount          // No abbreviation.
dnsConnectionIndex  // Most people know what "DNS" stands for.
referrerUrl         // Ditto for "URL".
customerId          // "Id" is both ubiquitous and unlikely to be misunderstood.
```

### 4.1 Naming Rules
1. Class names: 
   1. UpperCamelCase
   2. Names are typically nouns or noun phrases.
2. Method names: 
   1. lowerCamelCase
   2. Names are typically verbs or verb phrases.
3. Enum names
   1. UpperCamelCase
   2. Names are typicall singular nouns. Individual items within the enum are named in `CONSTANT_CASE`
4. Constant names
   1. CONSTANT_CASE, all uppercase cases with words separated by underscores.
   2. Names are typically nouns or noun phrases.
   3. Deeply immutable variables are constants. The variable `const array = []` is not a constant.
   4. Recommend [immutable-js](https://immutable-js.github.io/immutable-js/) from Facebook
5. Others
   1. lowerCamelCase
   2. Include non-constant field names, parameter names, local variable names, etc.

### 4.2 Naming Methods
1. Camel naming method 
   1. Covert from the phrase to plain ASCII.
   2. Divide the result into words.
    - If any word already has a conventionial camel case appearance, split it. (e.g., `'YouTube' -> 'You Tube'`)
   3. Then lowercase everything and uppercase only the first character.
   4. Finally, join.

Example
```js
'XML HTTP request' -> 'XmlHttpRequest', not 'XMLHTTPRequest'
'new customer ID' -> 'newCustomerId', not 'newCustomerID'
'supports IPv6 on iOS' -> 'supportsIpv6OnIos', not 'supportsIPv6OnIOS'
'YouTube importer' -> 'YouTubeImporter', not 'YoutubeImporter'
```

## 5 Vue.js
1. For parent-child communication, vuex, prop, and event are preferred than `this.$parent`, `this.refs`.
2. Expression in template should be concise

Example
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

3. Directive shorthands (`:` for `v-bind:`, `@` for `v-on:` and `#` for `v-slot`) should be used always.
4. Element selectors should be avoided with `scoped`.

## 6 Comments
1. Top/file-level comment style
   1. [Example](#1-files).
   2. For the situation that one class/component/function/xxx per file, class/component/function/xxx comments can be omitted.
2. Class/component comment style

Example
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

3. Function comment style
```js
/**
* Description of function
* @param {number} arg1 The first argument.
* @param {number} arg2 The second argument.
* @param {...number} rest The remainder of arguments are all numbers.
* @returns {number} The result
*/
function func(arg1, arg2, ...rest){
  // ...
}
```

4. Block comment style
```js
// xxx
// yyy
// ...
```

5. Variable comment style
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
  FIRST_OPTION: 1,
  SECOND_OPTION: 2,
}
```

6. Deprecation
   1. Mark deprecated methods, classes or interfaces with @deprecated annotations. 
   2. A deprecation comment must include simple, clear directions for people to fix their call sites.


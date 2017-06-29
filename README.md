# Deep clone simple

Deep clone utlity function for JavaScript that is limited to basic data types:
 - Objects `{ hello: 2 }`
 - Array `[1, 2, 3]`
 - Number `5.2`
 - Boolean `true`
 - String `"hello"`
 - Date `new Date()`
 - Functions `function bla() {}`
 - `null`

Minimizes to 279 bytes.

## Installation

```bash
yarn add deep-clone-simple
```

## Usage

```js
import deepClone from 'deep-clone-simple';

const copy = deepClone(someData);
```

## Run tests

```bash
yarn test
yarn test-watch
```

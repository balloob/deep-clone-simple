# Deep clone simple

Deep clone utlity function for JavaScript that only works with JSON friendly data types: Object, Array, number, boolean, `null`, string. As bonus also works with functions.

Minimizes to 203 bytes.

## Installation

```
yarn add deep-clone-simple
```

## Usage

```js
import deepClone from 'deep-clone-simple';

const copy = deepClone(someData);
```

## Run tests

```
yarn test-watch
```

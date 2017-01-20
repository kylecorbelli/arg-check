# arg-check

arg-check is a lightweight library to help developers catch bugs before they skitter in by making sure the right types of arguments are being passed into functions and methods.

It takes two arguments: (1) an argument you've passed into a function declaration, and (2) the type you expect that argument to be. It couldn't be easier:

```javascript
let argCheck = require('arg-check');

let add = (a, b) => {
  argCheck(a, 'number');
  argCheck(b, 'number');

  return a + b;
};

add(3, 4); // 7

add(3, 'four'); // TypeError: Expected argument to be of type "number" but instead received type "string"
```
## Getting Started

#### Step 1
In the terminal:
```
$ npm install arg-check
```
#### Step 2
In path/to/my/rad/app/or/whatever/app.js:
```javascript
let argCheck = require('arg-check');
```
#### Step 3
Really, that's it. Start arg-checking!

## Supported Argument Types

Note all argument types are lowercase strings.

* `'null'`
* `'undefined'`
* `'string'`
* `'number'`
* `'boolean'`
* `'array'`
* `'object'`

argCheck also supports custom class types:
```javascript
class Person {
  constructor(attributes) {
    this.name = attributes.name;
  }
}

let rachael = new Person({ name: 'Rachael' });

let personName = (person) => {
  argCheck(person, 'person');

  return person.name;
};

personName(rachael); // 'Rachael'
personName({ name: 'Rachael' }) // TypeError: Expected argument to be of type "person" but instead received type "object"
```

Note again that the expected class name will be a lowercase string.

## Contributing
We'd love contributors and feedback! We are currently at 100% test coverage and that's the way we like it. Hit us up and let's make this thing even better.

## License
arg-check is released under the [MIT License](https://opensource.org/licenses/MIT)

'use strict';

// throw new TypeError('Wrong!');

let name = 'kyle';
let age = 31;
let isCoolGuy = true;
let friends = ['rachael', 'jakey boy'];
let hobbies = {
  indoor: ['coding', 'netflix'],
  outdoor: ['hiking', 'surfing', 'walking jake']
};

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCoolGuy);
// console.log(typeof friends);
// console.log(typeof hobbies);
console.log(typeof undefined);
console.log(typeof null);

console.log(name.constructor.name);
console.log(age.constructor.name);
console.log(isCoolGuy.constructor.name);
console.log(friends.constructor.name);
console.log(hobbies.constructor.name);
// console.log(undefined.constructor);
// console.log(null.constructor);

class Person {
  constructor(name) {
    this.name = name;
  }
}

let kyle = new Person('Kyle', 31);

console.log(kyle.name);
console.log(kyle.constructor.name);

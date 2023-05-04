// Functions that return functions

'use strict';

const greet = function (greeting) {
  return name => `${greeting} ${name}!`;
};

const greetHey = greet('Hey');
console.log(greetHey('John'));
console.log(greetHey('Charles'));

const greetHi = greet('Hi');
console.log(greetHi('Flora'));
console.log(greetHi('Patience'));

// Combine function calls
console.log(greet('Hello')('Denis'));

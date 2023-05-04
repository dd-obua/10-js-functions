// Functions that return functions

'use strict';

const greet = function (greeting) {
  return name => console.log(`${greet} ${name}!`);
};

const greetHey = greet('Hey');

// Functions that return functions

'use strict';

const greet = function (greeting) {
  return name => console.log(`${greeting} ${name}!`);
};

const greetHey = greet('Hey');

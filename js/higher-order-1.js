// Functions that accepts other functions as inputs

'use strict';
console.log();

const oneWord = str => str.replace(/ /g, '').toLowerCase();

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Create higher order function
const strTransform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Tranformed by: ${fn.name}`);
};

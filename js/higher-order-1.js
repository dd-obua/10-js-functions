// Functions that accepts other functions as inputs

'use strict';
console.log();

const oneWord = str => str.replace(/ /g, '').toLowerCase();

let motto = 'For Community Transformation';
console.log(oneWord(motto));
console.log();

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

let faithWord = 'God is able';
console.log(upperFirstWord(faithWord));
console.log();

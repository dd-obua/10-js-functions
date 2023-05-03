'use strict';

// Passing arguments by value vs. by reference
const flight = 'LH234';
const traveller = { name: 'Denis', passport: 2378745912 };

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 2378745912) console.log('Checked in.');
  else console.log('Wrong passport.');
};

checkIn(flight, traveller);
console.log(flight);
console.log(traveller);
console.log();

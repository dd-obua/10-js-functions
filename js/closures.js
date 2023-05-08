// Closures
// We don't create closures, certain situations create closures and we simply need recognize them

'use strict';

const bookSecurely = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const book = bookSecurely();

book();
book();
book();

console.dir(book);

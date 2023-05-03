'use strict';

console.log();

// Default parameters
const bookings = [];

const createBookings = function (
  flightNum,
  numPassangers = 1,
  fare = 199 * numPassangers
) {
  const booking = { flightNum, numPassangers, fare };
  bookings.push(booking);
  console.log('Bookings:', bookings);
};

createBookings('BH123', 2, 199);
console.log();
createBookings('BH124');
console.log();
createBookings('BH125', 2, 800);
console.log();
createBookings('BH127', 5);
console.log();
createBookings('BH128', undefined, 1000);
console.log();

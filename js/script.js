'use strict';

console.log();

// Default parameters
const bookings = [];

const createBookings = function (flightNum, numPassangers = 1, fare = 199) {
  const booking = { flightNum, numPassangers, fare };
  bookings.push(booking);
  console.log('Bookings:', bookings);
};

createBookings('BH123', 2, 199);
console.log();
createBookings('BH124');
console.log();

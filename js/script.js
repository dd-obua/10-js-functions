'use strict';

// Default parameters
const bookings = [];

const createBookings = function (flightNum, numPassangers, fare) {
  const booking = { flightNum, numPassangers, fare };
  return bookings.push(booking);
};

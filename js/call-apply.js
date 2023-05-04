// Implementing call and apply methods
'use strict';

const eagleAir = {
  airline: 'Eagle Air',
  iataCode: 'EA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline}, flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

eagleAir.book(123, 'Severino Ojara');
eagleAir.book(456, 'John Wonekha');
console.log('Bookings:', eagleAir.bookings);

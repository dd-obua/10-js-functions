// Implementing call and apply methods
// 'use strict';

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

const otaraAir = { airline: 'Omolo Air', iataCode: 'OA', bookings: [] };

const book = eagleAir.book;

// Use call method
book.call(otaraAir, 808, 'Sarah Olega');
book.call(eagleAir, 345, 'John Doe');
console.log(eagleAir);
console.log(otaraAir);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'John Cooper');

// Use apply
const flightData = [582, 'Mary Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// Use bind
const bookLX = book.bind(swiss);
bookLX(584, 'James Cooper');

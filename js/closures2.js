// Closures
'use strict';

// Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assign f function
h();
f();

console.dir(f);

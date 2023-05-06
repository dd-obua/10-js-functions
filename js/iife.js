// Immediately invoked function  expressions

const justRun = function () {
  console.log('This can be run any number of times.');
};
justRun();

// iife
(function () {
  console.log('This will never run again.');
})();

(() => console.log('This also will never run again.'))();

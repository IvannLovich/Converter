'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decimalTobinary = decimalTobinary;
exports.binaryTodecimal = binaryTodecimal;
// ---- función que pasa un número decimal a binario ----

function decimalTobinary(num) {
  var result = '';
  while (Math.floor(num / 2) >= 1) {
    var rest = num % 2;
    result = result + rest + '';
    num = Math.floor(num / 2);
    if (num === 1) {
      rest = 1;
      result = result + rest + '';
    }
  }
  var n = result.split('').reverse().join('');
  console.log(n);
  return n;
}

// ---- función que pasa un número binario a decimal ----

function binaryTodecimal(num) {
  num = ('' + num).split('');
  var a = num.map(function (n) {
    return parseInt(n);
  });
  var count = 0;
  var exp = a.length - 1;

  for (var i = 0; i <= a.length - 1; i++) {
    count = count + a[i] * Math.pow(2, exp);
    exp--;
  }
  var n = count.toString();
  console.log(n);
  return n;
}
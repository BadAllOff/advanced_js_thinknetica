'use strict';
// 1. Реализовать аналог методов map и filter массива используя метод reduce массива 

Array.prototype.mapArray = function (callback) {

  let accum = [];

  this.reduce((ignored, currentValue) => {
    accum.push(callback(currentValue))
  }, this[0]);

  return accum;
};

Array.prototype.filterArray = function (callback) {

  let accum = [];

  this.reduce((ignored, currentValue) => {
    if (callback(currentValue) == true) {
      accum.push(currentValue);
    }
  }, this[0]);

  return accum;
};

// Test new map method
// ------------------------------------------------------------------
let numbers = [1, 4, 9, 16, 25]

function testMapArrayMethod() {
  let roots = numbers.mapArray(Math.sqrt);
  console.log(`теперь roots равен: ${roots}`);
  console.log(`numbers всё ещё равен:  ${numbers}`);

  let doubles = numbers.mapArray(function (num) {
    return num * 2;
  });
  console.log(`теперь doubles равен: ${doubles}`);
  console.log(`numbers всё ещё равен:  ${numbers}`);
}

// Test new filter method
//--------------------------------------------------------------------

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
  if (num <= 1)
    return false;
  else if (num === 2)
    return true;
  else {
    for (let i = 2; i < num; i++)
      if (num % i === 0)
        return false;
    return true;
  }
}

function testFilterArrayMethod() {

  let newArray = array.filterArray(isPrime);
  array.filterArray(isPrime);

  console.log(`Мы получили новый массив "newArray", равный: ${newArray}`);
  console.log(`Старый массив "array" всё ещё равен: ${array}`);
};

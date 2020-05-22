'use strict';
/**
 * 1. Написать функцию, которая принимает массив чисел и возвращает сумму и количество отрицательных элементов массива.
 *    Пример
 *    исходный массив:
 *    [91, 93, 45, -67, -96, -40, 34, -96, 42, -58]
 *    результат :
 *    
 *    {
 *      count: 5,
 *      sum: -357,
 *    }
 */

function negativeElements(...arrayNumbers) {
  let count = 0;
  let sumNegativeNumbers = arrayNumbers.reduce((total, number) => {
    if (typeof(number) == 'number' && number < 0) {
      total += number;
      count++;
    }
    return total;
  }, 0);


  console.log(sumNegativeNumbers);
  console.log(count);
};
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
  let negativeNumbers = arrayNumbers.filter(number => typeof (number) == 'number' && number < 0);
  let sum = negativeNumbers.reduce((total, number) => total + number, 0)

  let result = {
    count: negativeNumbers.length,
    sum: sum
  }
  
  console.log(result);
};
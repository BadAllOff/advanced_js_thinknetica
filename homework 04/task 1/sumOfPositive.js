'use strict';
/**
 *  1. Написать чистую функцию, которая принимает массив чисел и возвращает сумму и количество положительных элементов массива.
 *  Сигнатура
 *  sumOfPositive(arr: number[]): {count: number, sum: number}
 *  Пример
 *  исходный массив:
 *  [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]
 *  Результат
 *
 *  {
 *    count: 5,
 *    sum: 357,
 *  }
 *
 *  Написать тесты для этой функции 
 */

function sumOfPositive(arr) {
  if (!Array.isArray(arr))
    throw new Error('Input data shold be array of numbers');

  const positiveNumbers = arr.filter(number => typeof (number) == 'number' && number > 0);
  const sum = positiveNumbers.reduce((total, number) => total + number, 0)

  return {
    count: positiveNumbers.length,
    sum: sum
  }
};
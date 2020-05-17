"use strict";
/**
 * 4. Среднее арифметическое
 * Запрашивать у пользователя (prompt) числа пока пользователь не введет пустое значение.
 * После ввода каждого числа выводить в консоль предварительный итог.
 * По завершению (когда пользователь ввел пустое значение) отобразить (alert) сумму, количество чисел и среднее арифметическое . 
 */
let numbersArray = Array();

function arithmeticalMean() {
  let inputNumber = Number(prompt('Введите число'));
  let sum;
  let arMean;

  if (inputNumber) {
    numbersArray.push(inputNumber);
    sum = numbersArray.reduce((a, b) => a + b);
    arMean = sum / numbersArray.length;
    displayResult(sum, numbersArray.length, arMean, true);
  }else{
    sum = numbersArray.reduce((a, b) => a + b);
    arMean = sum / numbersArray.length;
    displayResult(sum, numbersArray.length, arMean);
  }
};

function displayResult(sum, numbersCount, arithmetMean, repeat=false){
  console.log(`Сумма чисел: ${sum}`);
  console.log(`Количество чисел: ${numbersCount}`);
  console.log(`Cреднее арифметическое: ${arithmetMean}`);
  if (repeat) 
  {
    arithmeticalMean();
  }
};
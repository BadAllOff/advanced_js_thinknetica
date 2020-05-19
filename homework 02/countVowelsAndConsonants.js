"use strict";
/**
 * 5. Подсчитать в тексте количество букв
 * Запрашивать у пользователя текст, а затем выводить количество гласных и согласных букв в введенном тексте. Алфавит латинский. 
 */

function countVowelsAndConsonants() {
  let inputData = prompt('Введите текст на латинском:');
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i <= inputData.length; i++) {
    if ((inputData.charAt(i).match(/[aeiouAEIOU]/))) {
      vowels++;
    } else if ((inputData.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))) {
      consonants++;
    }
  }

  console.log(`гласных: ${vowels}`);
  console.log(`согласных: ${consonants}`);
};
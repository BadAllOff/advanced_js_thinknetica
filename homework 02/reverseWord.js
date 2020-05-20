"use strict";
/**
 * 6. Постройте алгоритм реверсии слова
 * Например, если аргумент слово «cat», то результатом должно быть слово «tac».
 * Слово запрашивать у пользователя 
 */

function reverseWord() {
  let word = prompt('Введите слово:');
  let reversedWord = (word.split("").reverse().join(""));
  console.log(reversedWord);
};
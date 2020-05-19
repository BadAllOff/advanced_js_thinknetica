"use strict";
/**
 * 7. Напишите программу, позволяющую удалить все лишние пробелы в тексте оставив по одному.
 * Текст запрашивать у пользователя 
 */

function removeWhitespaces() {
  const inputText = prompt("Ввудите текст для удаления лишних пробелов.")

  let textArray = inputText.trim();
  let removeWhitespace = textArray.replace(/  +/g, ' ');
  let correctPunctuation = removeWhitespace.replace(/\s+(\W)/g, '$1');

  console.log(correctPunctuation);
}
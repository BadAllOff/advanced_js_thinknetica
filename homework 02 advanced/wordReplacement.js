"use strict";
/**
 * 5. Замена слово А на слово B только в предложениях, где имеется слово C
 * Текст и слова А, В можно задать в коде решения
 * Пример:
 * Заменить “Java” на “JS” только в предложении где есть слово “overloading”
 * Текст:
 * The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++
 * Результат:
 * The syntax of Java is largely influenced by C++. Unlike C++, JS does not support operator overloading. Java uses comments similar to those of C++ 
 */

function wordReplacement() {

  let originalText = prompt('Пожалуйста введите текст:');
  let result = [];

  originalText.split(/[.?!]/).filter(function (n) {
    if (/overloading/i.test(n)) {
      result.push(n.replace(/Java/ig, 'JS'));
    } else {
      result.push(n);
    }
  });

  console.log(result);
}
/**
 * 2. Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой
 *  word: само слово
 *  code: сумма кодов всех символов слова
 *  Словом можно считать символы между пробелами
 *  Для подсчета суммы кодов всех символов слова написать отдельную чистую функцию, на нее так же написать тесты
 *  Сигнатура
 *  wordStat(text: string): {word: string: code: number}[]
 *  Пример
 *  исходный текст:
 *
 *  Lorem ipsum dolor sit amet.
 *
 *  результат:
 *
 *  [
 *    { word: 'Lorem', sum: 511 },
 *    { word: 'ipsum', sum: 558 },
 *    { word: 'dolor', sum: 544 },
 *    { word: 'sit', sum: 336 },
 *    { word: 'amet.', sum: 469 }
 *  ]
 *
 *  Написать тесты для этой функции 
 */

function wordStat(text) {
  if (typeof (text) != 'string') { throw new Error('Пожалуйста введите текст.'); }

  let agregator = [];
  let chunks = text.split(' ');

  agregator = chunks.map((currentWord) => {
    return { 'word': currentWord, sum: sumCharCode(currentWord) };
  });

  return agregator;
}


function sumCharCode(word) {
  let sum = 0;
  for (let i = 0; i < word.length; ++i) {
    sum = sum + word.charCodeAt(i);
  }
  return sum;
}
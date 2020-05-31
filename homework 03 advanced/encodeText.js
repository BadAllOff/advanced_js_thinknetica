'use strict';
/**
 * 3. Написать функцию encodeText, которая принимает текст, выбирает все уникальные слова в нем, 
 *    для каждого слова подсчитывает количество вхождений и присваивает уникальный код.
 *    Словом считать последовательность символов между пробелами.
 *    Далее перекодирует текст, заменяя слова из словаря на код слова
 *    Уникальный код - случайное число (желательно - в 16ричной или 36ричной системе)
 *    Проверить что код действительно уникален для этого словаря
 *    Возвращает объект
 *    {
 *      dictionary: [
 *        {
 *          word: слово
 *          count: количество использований в тексте
 *          code: уникальный код.
 *        }
 *      ],
 *      encodedText: перекодированный текст
 *    }
 *
 *    Пример:
 *    Исходный текст:
 *    Lorem ipsum ipsum dolor.
 *    Результат:
 *
 *    {
 *      dictionary: [
 *        { word: 'Lorem', count: 1, code: '58' },
 *        { word: 'ipsum', count: 2, code: 'rd' },
 *        { word: 'dolor.', count: 1, code: 'g7' }
 *      ],
 *      encodedText: '58,rd,rd,g7'
 *    }
 *
 */

function encodeText(str) {
  if (typeof str !== 'string')
    throw new Error('Please provide some text')

  let arrayOfWords = str.trim().split(' ');
  let dictionary = [];
  let encodedText = [];
  let i = 0;

  do {

    if (dictionary.length == 0) {
      dictionary.push({ word: arrayOfWords[i], count: 1 });
      i += 1;
    } else {
      let matchIndex = findMatchIndex(dictionary, arrayOfWords[i]);
      matchIndex ? dictionary[matchIndex].count += 1 : dictionary.push({ word: arrayOfWords[i], count: 1 });
      i += 1;
    }
  } while (i < arrayOfWords.length);

  dictionary.map(obj => {
    let code = generateUnigueCode(dictionary, obj);
    obj.code = code;
    encodedText.push(code);
  });

  const result = {
    dictionary,
    encodedText: encodedText.join(',')
  };

  console.log(result);
}

/**
 * Генератор уникального, для данного массива, 32 битного кода.
 * 
 * @param {array} dictionary массив с элементами.
 * @param {string} word слово, для проверки правильного дублирования сгенерированного кода на одинаковых словах.
 * @returns {string} уникальный код.
 */

function generateUnigueCode(dictionary) {
  let code;

  do {
    code = Math.floor(Math.random() * 500).toString(32);
  } while (dictionary.find((element) => element.code === code))

  return code;
}

/**
 * Отчет о рейсе на данный момент
 * 
 * @typedef {Object} Report
 * @param {array} dictionary массив с элементами.
 * @param {string} word слово, совпадение с которым мы ищем
 * @returns {number} индекс совпадения (или undefined если совпадений нет).
 */

function findMatchIndex(dictionary, word) {
  let matchIndex;

  for (let m = 0; m < dictionary.length; m++) {
    if (dictionary[m].word == word) {
      matchIndex = m;
    }
  }
  return matchIndex
}
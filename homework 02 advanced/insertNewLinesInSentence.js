"use strict";
/**
 * 3. Форматирование текста.
 * Расставить символы конца строки так, чтобы строка была не длиннее 80 символов 
 */

function wrapText() {
  let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  let modifyedText = longText.replace(/(.{80})/g, "$1\n");
  console.log(longText)
  console.log(modifyedText);
}
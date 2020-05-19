"use strict";
/**
 * 3. Валидировать и переформатировать введенную пользователем дату из Американского в Российский стандарт
 * Американский формат: ММ/ЧЧ/ГГГГ например: 5/30/2006
 * Российский формат: ЧЧ.ММ.ГГГГ например: 30.05.2006 
 */

function validateDate() {

  const inputDate = prompt("Пожалуйста введите дату в формате ММ/ЧЧ/ГГГГ");
  let dateformat = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;

  if (inputDate.match(dateformat)) {
    let date = inputDate.split('/');
    let normalizedInput = normalizeInput(date);
    let standartFormat = `${normalizedInput[1]}.${normalizedInput[0]}.${normalizedInput[2]}`

    alert(`Дата в стандартном формате ${standartFormat}`);
  } else {
    alert('Неверный формат даты. Попробуйте снова.');
  };
}

function normalizeInput(input) {
  let normalizedInput = input.map(function (val, index) {
    if (val.length < 2) {
      val = String.prototype.concat('0', val);
    }
    return val;
  });

  return normalizedInput;
};
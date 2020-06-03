"use strict";
/**
 * 2. Реализовать форму покупки билетов на самолет.
 *
 *    Форма должна собирать необходимую информацию и вызывать функцию buyTicket.
 *    В случае ошибки показать текст ошибки
 *    В случае успеха показать купленное место
 *    Также после успешной покупки билета требуется очистить поля формы, чтобы было удобно покупать новый билет
 */
const buyTicketForm = document.getElementById("buy-ticket-form");
buyTicketForm.addEventListener("submit", submitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
  // прерываем всплытие что бы форма не отправлялась
  event.preventDefault();
  
  let flights = world.flights;
  let flightName = buyTicketForm.elements.flightName.value;
  let buyTime = Date.now();
  let fullName = buyTicketForm.elements.fullname.value ? buyTicketForm.elements.fullname.value : false ;
  let type = +buyTicketForm.elements.type.value;

  try {
    const result = buyTicket(flights, flightName, buyTime, fullName, type);
    buyTicketForm.reset();
    updateView();
  } catch (e) {
    document.querySelector(".errorMessage").textContent = e.message;
  }
}

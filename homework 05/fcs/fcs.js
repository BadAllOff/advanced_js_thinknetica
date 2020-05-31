'use strict';

function makeTime(hours, minutes) {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

/**
* @type {Object<string, Flight>} Список всех рейсов
*/
let flights = {
  BH118: {
    name: 'BH118',
    seats: 28,
    businessSeats: 4,
    registrationStarts: makeTime(10, 0),
    registrationEnds: makeTime(15, 0),
    countOfReservations: 1,
    tickets: [
      {
        id: 'BH118-B50',
        flight: 'BH118',
        fullName: 'Ivanov I. I.',
        type: 0,
        seat: 18,
        buyTime: makeTime(2, 0),
        registrationTime: null,
      }
    ],
  }
};

/**
* Добавление рейса
* 
* * назначение номера рейса
* * подготовка рейса
*   * вычисление времени регистрации
*   * подготовка структуры Flight
* 
* @param {Airliner} airliner Информация о самолете
* @param {number} time Время вылета
* @returns {Flight}
*/
// function createFlight(airliner, time) { }

/**
* Поиск свободного места нужного типа
* 
* Гарантирует что найдет свободное место нужного типа или вернет null
* 
* @param {Flight} flight 
* @param {number} type
* @returns {number} seat
*/
function findAvailableSeat(flight, type) {
  let exists;
  let seat;
  let seatsOfType = 0;

  switch (type) {
    case 0: // standart
      const availableSeats = [];

      for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
        if (!flight.tickets.find(item => item.seat === i))
          availableSeats.push(i)

      if (availableSeats.length === 0)
        return null;

      const index = Math.floor(Math.random() * availableSeats.length);
      return availableSeats[index];
    case 1: // business
      for (let i = 1; i <= flight.businessSeats; i++)
        if (!flight.tickets.find(item => item.seat === i))
          seatsOfType++;

      if (seatsOfType === 0)
        return null;

      do {
        seat = Math.floor(Math.random() * flight.businessSeats) + 1;
        exists = flight.tickets.find(item => item.seat === seat);
      } while (exists);

      return seat;
    default:
      throw new Error(`Unknown type`)
  }
}

/**
* Покупка билета на самолет
* 
* * проверка рейса
* * проверка возможности купить (время и наличие мест)
* * сохранение данных билета в информации о рейсе
* 
* @param {string} flightName Номер рейса
* @param {number} buyTime Время покупки
* @param {string} fullName Имя пассажира
* @param {number} type Тип места
* @returns {Ticket} Возвращаем копию билета
*/
function buyTicket(flightName, buyTime, fullName, type = 0) {
  const flight = flights[flightName];

  if (!flight)
    throw new Error('Flight not found');

  if (flight.tickets.length >= flight.seats)
    throw new Error('No seats available');

  if (buyTime > flight.registartionEnds)
    throw new Error('Time away');

  const seat = findAvailableSeat(flight, type);
  if (!seat)
    throw new Error(`No seats of type ${type} available. You can choose another type`);

  let id;
  let exists = false;
  do {
    id = flight.name + '-' + Math.random().toString().substr(2, 3);
    exists = flight.tickets.find(item => item.id === id);
  } while (exists);

  /**
   * @type {Ticket}
   */
  const ticket = {
    id,
    flight: flight.name,
    buyTime,
    fullName,
    registrationTime: null,
    type,
    seat,
  }

  flight.tickets.push(ticket);
  flight.countOfReservations++;

  // return Object.assign({}, ticket);
  return {
    ...ticket,
  };
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
console.log(a);
const bTicket = buyTicket('BH118', makeTime(5, 10), 'Vasilyev I. I.', 1);
console.log(bTicket);

function displayFlights() {
  console.log('*** List of all flights ***');
  console.log(flights);
}

function flightDetails(flightName) {
  console.log(`*** Details of flight ${flightName} ***`);
  const flight = flights[flightName];
  if (!flight) {
    console.warn('Flight not found');
    return;
  }

  // console.table(flight);
  // console.table(flight.tickets);

  return flight;
}



/**
 * Функция пробует произвести электронную регистрацию пассажира
 * 
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 * 
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
  const flightDetail = flightDetails(ticket.flight);

  if (!flightDetail)
    throw new Error("There is no flight with that ID");

  // Real Ticket = rTicket
  let rTicket = flightDetail.tickets.find(origTicket => origTicket.id == ticket.id);
  console.log(rTicket);

  if (!rTicket)
    throw new Error('No such ticket.');

  if (rTicket.fullName !== fullName)
    throw new Error('This ticket is booked on another person')

  if (checkRegistrationTime(flightDetail, nowTime)) {
    rTicket.registrationTime = nowTime;
  };

  console.log(`Registration completed. Have a good flight!`)
  return true;
}

function checkRegistrationTime(flight, nowTime) {

  if (nowTime >= flight.registrationStarts && nowTime <= flight.registrationEnds) {
    return true
  } else {
    if (nowTime < flight.registrationStarts) {
      throw new Error(`Registration didn't started yet.`);
    } else if (nowTime > flight.registrationEnds) {
      throw new Error(`Sorry, you're late. Registration has ended.`)
    };
  };

  return true;
}

/**
 * Отчет о рейсе на данный момент
 * 
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */
/**
 * 
 * b. Добавить в генератор отчета
 *  i.
 *  @property {number} countOfReservations Количество всех регистраций мест
 *  ii. 
 *  @property {number} countOfReverts Количество возвратов билетов
 *  iii. 
 *  @property {number} percentOfReverts Процент возвратов от общего числа бронирований
 *  c. При необходимости подправить уже написанный код
 * 
 */
/**
* Функция генерации отчета по рейсу
* 
*  * проверка рейса
*  * подсчет
* 
* @param {string} flight номер рейса
* @param {number} nowTime текущее время
* @returns {Report} отчет
*/

function flightReport(flight, nowTime) {
  const flightDetail = flights[flight];
  if (!flightDetail)
    throw new Error("There is no flight with that ID");

  const registration = checkRegistrationTime(flightDetail, nowTime);
  const countOfSeats = flightDetail.seats;
  const reservedSeats = flightDetail.tickets.length;
  const registeredSeats = flightDetail.tickets.filter((t) => t.registrationTime !== null).length;
  const countOfReservations = flightDetail.countOfReservations;
  const countOfReverts = countOfReservations - reservedSeats;
  const percentOfReverts = Math.round(countOfReverts / countOfReservations * 100)

  const REPORT = {
    flight,
    registration,
    complete: !countOfSeats,
    countOfSeats,
    reservedSeats,
    registeredSeats,
    countOfReservations,
    countOfReverts,
    percentOfReverts
  }

  return { ...REPORT };
}

/**
 * 2. Для системы контроля авиабилетов, рассмотренной на занятии.
  a. Добавить функцию возврата билета

/**
 * Функция возврата билета
 * 
 *  * проверка рейса
 *  * проверка билета
 *  * вернуть билет можно если до рейса не менее 3 часов
 *  * вернуть билет можно если не бизнес класс
 * 
 * @param {string} ticket номер билета
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли отменить билет
 */
function revertTicket(ticket, nowTime) {
  try {
    const flightDetail = flightDetails(ticket.flight);
    if (!flightDetail)
      throw new Error("There is no flight with that ID");

    const rTicket = flightDetail.tickets.find(origTicket => origTicket.id == ticket.id);
    if (!rTicket)
      throw new Error('No such ticket.');

    if (flightDetail.registrationEnds - (3 * 60 * 60 * 1000) < nowTime)
      throw new Error('Ticket returning time has expired');

    if (rTicket.type === 1)
      throw new Error('Sorry but Business class tickets can not be returned.');

    const ticketIndex = flightDetail.tickets.indexOf(rTicket);
    flightDetail.tickets.splice(ticketIndex, 1);
    flights[rTicket.flight].countOfReservations -= 1

    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
}

/**
 * 2. Реализовать функцию flightDetails(flightName) которая принимает объект рейса и будет выводить в контейнер 
 * <div id=”flight-details”></div> отчет по рейсу и отображать список купленных билетов: номер билета, 
 * место, полное имя пассажира, прошел ли регистрацию на рейс. 
 */

// такая функция уже есть, пришлось переназвать

function showflightDetails(flightName) {

  if (!flights[flightName])
    throw new Error('No such flight');

  let flightContainer = document.getElementById("flight-details");
  flightContainer.innerHTML = "";

  let title = document.createElement('h3');
  title.textContent = `Flight ${flightName} details`;
  flightContainer.appendChild(title);

  let ticketsArr = Array.from(flights[flightName].tickets);
  let allTicketsInfo = document.createElement('ul');

  let protoObj = {
    id: 'Ticket id',
    seat: 'Seat number',
    fullName: 'Passenger name'
  }

  ticketsArr.forEach(ticket => {
    let divider = document.createElement('hr');

    for (let key in protoObj) {
      let value = protoObj[key];
      let li = document.createElement('li');
      li.innerText = `${value} - ${ticket[key]}`;
      allTicketsInfo.appendChild(li);
    };

    let li = document.createElement('li');
    li.innerText = `Registered: ${ticket.registrationTime ? 'yes' : 'no'}`;
    allTicketsInfo.appendChild(li);
    allTicketsInfo.appendChild(divider);
  });

  document.getElementById("flight-details").appendChild(allTicketsInfo);
}
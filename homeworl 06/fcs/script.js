'use strict';

/**
 * Объявление var variable в корне файла
 * равносильно присвоениею в window[variable]
 * что есть создание глобальной переменной между файлами
 */

let currentFlight = '';

var displayFlights = displayFlightsInit(
    document.getElementById('flight-list'),
    document.getElementById('flight-list-item-template'),
);

var flightDetails = flightDetailsInit(
    document.getElementById('flight-details'),
    document.getElementById('tickets-list'),
    document.getElementById('flight-details-ticket-template'),
);

function updateView() {
    displayFlights(world.flights);
    flightDetails(world.flights, 'BH118');
}

const result = addFlight(
    world.flights,
    {
        name: 'Airbus 747',
        seats: 36,
        businessSeats: 4,
    },
    makeTime(16, 0),
    'BH118',
);

let res = buyTicket(world.flights, 'BH118', makeTime(5, 10), 'Petrov I. I.');

let res2 = buyTicket(world.flights, 'BH118', makeTime(5, 10), 'Ivanov I. I.');


updateView();

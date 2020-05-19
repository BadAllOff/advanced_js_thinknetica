/**
 * 2. Нормализация введенного времени в 24-часовой формат
 * Привести заданное время в формат hh:mm где hh - час с ведущим нулем (01, 07, 12). Примеры входных данных и результата:
 * 
 * “12: 07 am” - “00:07”
 * “03.2 pm” - “15:02”
 * “1-17 am” - “01:17”
 * “34:67” - выдать ошибку 
 */

// Подсмотрел у коллеги но нашёл ошибки в регулярке и обработке данных выше.
// Например дата "03.2 pm" выдавала ошибку

function timeConverter() {

    let inputTime = prompt('Введите время:').trim().toLocaleLowerCase();
    inputTime = inputTime;
    const time = inputTime.match(/([0-9]+)/g);
    // const timePeriod = inputTime.match(/[amp]+/g); будет принимать так же значение "apm" - что неверно.
    const timePeriod = inputTime.match(/[ap][pm]/g);

    let hour = parseInt(time[0]);
    let min = parseInt(time[1]);

    if (timePeriod === null) {
        if (hour >= 0 && hour <= 24 && min >= 0 && min <= 59) {
            displayTime(hour, min);
        } else {
            console.log('Время указано не верно')
        }
    } else {
        if (hour <= 12 && hour >= 0 && min >= 0 && min <= 59) {
            displayTime(hour, min, timePeriod);
        } else {
            console.log('Не верно указано время')
        }
    }
};

function displayTime(hour, min, timePeriod = false) {
    if (timePeriod[0] === 'pm') {
        hour == 12 ? hour = 0 : hour = hour + 12;
    } else if (timePeriod[0] === 'am') {
        hour == 12 ? hour = 0 : hour;
    }

    if (String(hour).length === 1) hour = '0' + hour
    if (String(min).length === 1) min = '0' + min

    console.log(`Время: ${hour}:${min}`)
};

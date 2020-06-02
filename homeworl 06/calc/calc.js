let registerX = '';
let registerY = '';
let operation = '';

const calculatorElement = document.getElementById('calculator');
const registerXElement = document.getElementById('register-x');
const registerYElement = document.getElementById('register-y');

/**
 * Все действия по группам
 * @type {{operations: [string, string, string, string], numbers: string[], actions: [string, string]}}
 */
const actions = {
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    operations: ['+', '-', '*', '/'],
    actions: ['=', 'C'],
};

/**
 * Особые действия для клавиш
 * @type {{Escape: string, Enter: string}}
 */
const keyMap = {
    'Escape': 'C',
    'Enter': '=',
};

/**
 * Формируем список всех нужных клавишь
 * @type {string[]}
 */
const allKeys = Object
    .values(actions)
    .reduce(
        (all, subset) => ([...all, ...subset]),
        Object.keys(keyMap),
    );

/**
 * Обрабатываем клавиатуру
 */
document.addEventListener('keydown', event => {
    const key = event.key;

    if (!allKeys.includes(key))
        return;

    if (key in keyMap)
        handleAction(keyMap[key]);
    else
        handleAction(key);

    event.stopPropagation();
});

/**
 * Обрабатываем клики мышью
 */
calculatorElement.addEventListener('click', event => {
    if (event.target.dataset && event.target.dataset.action)
        handleAction(event.target.dataset.action);
});

/**
 * Обрабатываем сами действия
 * @param action
 */
function handleAction(action) {
    console.log(action);
    if (actions.numbers.includes(action))
        typeNumber(action);
    if (actions.operations.includes(action))
        setOperation(action);

    if (action === '=')
        calculate();
    if (action === 'C')
        clear();

    displayRegisters();
}

/**
 * Добавить новую цифру к регистру Х
 * @param {string} symbol
 */
function typeNumber(symbol) {
    if (!operation)
        registerY = '';
    registerX += symbol;
}

/**
 * Выполнить оператор
 * @param action
 */
function setOperation(action) {
    if (registerX)
        calculate();

    operation = action;
}

/**
 * Вычисление выражения
 */
function calculate() {
    switch (operation) {
        case '+':
            registerX = +registerY + +registerX;
            break;
        case '-':
            registerX = registerY - registerX;
            break;
        case '*':
            registerX = registerY * registerX;
            break;
        case '/':
            registerX = registerY / registerX;
            break;
    }

    registerY = registerX;
    registerX = '';
    operation = '';
}

function clear() {
    registerY = '';
    registerX = '';
    operation = '';
}

function displayRegisters() {
    registerXElement.textContent = registerX || registerY || '0';

    registerYElement.textContent = registerY + operation;
}

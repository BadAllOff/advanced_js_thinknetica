"use strict";

/**
 * Реализовать 2 верфи, каждая из которых должна будет специализироваться на своем типе кораблей
 *
 * Что можно делать в верфи:
 * Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
 * Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
 * Перекрашивать корабли - Можно красить любые корабли
 * Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
 *
 * @param {{ x: number, y: number }} [{x:0, y:0}] position
 * @param {Ship} shipType
 */

function SailingMarina(position = { x: 10, y: 10 }, shipType) {
  this.shipType = shipType;
  this.position = position;
  ServiceMarina.call(this);
}

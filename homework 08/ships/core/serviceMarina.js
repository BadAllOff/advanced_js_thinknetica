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
 */

function ServiceMarina() {
  /**
   * @param void
   */
  this.buildShip = function () {
    return new MotorShip();
  };

  /**
   * @param {Object} ship
   */
  this.repair = function (ship) {
    if (!(ship instanceof this.shipType)) {
      throw new Error(`Sorry, here you can't repair your type of ship`);
    }
    ship.damage = 0;
  };

  /**
   * @param {Object} ship
   * @param {string} color
   */
  this.paintShip = function (ship, color) {
    ship.color = color;
  };

  /**
   * @param {Object} ship
   */
  this.trade = function (ship) {
    if (!(ship instanceof this.shipType)) {
      throw new Error(`Sorry, here you can't trade your type of ship`);
    }
    return this.buildShip();
  };
}

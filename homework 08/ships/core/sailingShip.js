"use strict";

/**
 * Для парусных кораблей доступны следующие специфичные характеристики:
 * Количество мачт
 * Общая площадь парусов
 *
 * @param {string} name
 * @param {string} model
 * @param {number} totalSailArea
 * @param {number} numberOfMasts
 * @param {{ x: number, y: number }} [{x:0, y:0}] position
 */

function SailingShip(
  name,
  model,
  totalSailArea,
  numberOfMasts,
  position = { x: 0, y: 0 }
) {
  Ship.call(this);
  this.name = name;
  this.model = model;
  this.totalSailArea = totalSailArea;
  this.numberOfMasts = numberOfMasts;
  this.position = position;
}

"use strict";

/**
 * Для моторные кораблей доступны следующие специфичные характеристики:
 * Мощность двигателя
 * Материал корпуса
 *
 * @param {string} name
 * @param {string} model
 * @param {number} enginePower
 * @param {string} material
 * @param {{ x: number, y: number }} [{x:0, y:0}] position
 */

function MotorShip(
  name,
  model,
  enginePower,
  material,
  position = { x: 0, y: 0 }
) {
  Ship.call(this);
  this.name = name;
  this.model = model;
  this.enginePower = enginePower;
  this.material = material;
  this.position = position;
}

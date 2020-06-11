"use strict";

function Marina(position = { x: 0, y: 0 }) {
  this.position = position;
  this.ships = [];

  /**
   * @param {Object} Ship
   */
  this.moor = function (ship) {
    if (this.ships.includes(ship.name))
      throw new Error(`The ship '${ship.name}' is already in marina`);

    if (!this._shipNearMarina(ship))
      throw new Error(`The ship '${ship.name}' is too far from marina`);

    dropAnchor.call(ship);
    this.ships.push(ship.name);
    return true;
  };

  /**
   * @param {Object} Ship
   */
  this.unmoor = function (ship) {
    if (!this.ships.includes(ship.name))
      throw new Error(`The ship '${ship.name}' is not moored in marina`);

    riseAnchor.call(ship);
    this.ships.pop(ship.name);
    return true;
  };

  this._shipNearMarina = function (ship) {
    if (
      ship.position.x == this.position.x &&
      ship.position.y == this.position.y
    ) {
      return true;
    } else {
      return false;
    }
  };
}

"use strict";

function Ship(name, model, position = { x: 0, y: 0 }) {
  this.name = name;
  this.model = model;
  this.position = position;
  this._isAnchorDroped = false;
  this.speed = 0;
  this.distance = 0;
  const directions = ["n", "s", "e", "w"];

  /**
   * @param ['n', 's', 'e', 'w'] direction
   */
  this.move = function (direction) {
    if (this._isAnchorDroped) 
      throw new Error("You need to rise anchor");
      
    if (!directions.includes(direction)) 
      throw new Error("Wrong direction");

    let x = this.position.x;
    let y = this.position.y;

    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
    }

    return this.moveTo({ x, y });
  };

  /**
   * @param {Object} position
   */
  this.moveTo = function (position) {
    if (this._isAnchorDroped) 
      throw new Error("You need to rise anchor");

    this.distance += Math.sqrt(
      (position.x - this.position.x) ** 2 + (position.y - this.position.y) ** 2
    );

    this.position = {
      x: position.x,
      y: position.y,
    };

    return true;
  };
}

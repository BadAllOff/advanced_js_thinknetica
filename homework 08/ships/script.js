"use strict";

const ship = new Ship("Best ship", "Tesla", { x: 1, y: 1 });
dropAnchor.call(ship);
const ship2 = new Ship("Good ship 2");
const marina = new Marina({ x: 3, y: 3 });

riseAnchor.call(ship);
ship.moveTo({ x: 3, y: 3 });
marina.moor(ship);
marina.unmoor(ship);

const motorShip = new MotorShip("Terminator", "M1", 9000, "titan", {
  x: 2,
  y: 2,
});
const sailShip = new SailingShip("Captain Jack Sparrow", "S1", 500, 10, {
  x: 2,
  y: 3,
});

const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);
const sailMarina = new SailingMarina({ x: 1, y: 1 }, SailingShip);

console.log(motorMarina);

// //Строить корабли
const newShip = motorMarina.buildShip();
newShip.name = "Terminator2";
newShip.model = "M2";
newShip.enginePower = 19000;
newShip.material = "vibranium";
newShip.position = { x: 1, y: 2 };
// console.log(newShip);

// //Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
motorMarina.repair(motorShip);
// motorMarina.repair(sailShip); // ERROR
console.log(motorShip); // new damage property
// console.log(sailShip); // no damage property

//Перекрашивать корабли - Можно красить любые корабли
motorMarina.paintShip(motorShip, "red");
motorMarina.paintShip(sailShip, "blue");

//Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
motorMarina.trade(motorShip);
// motorMarina.trade(sailShip); // ERROR

//Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// sailMarina.repair(motorShip); // ERROR
sailMarina.repair(sailShip);

//Перекрашивать корабли - Можно красить любые корабли
sailMarina.paintShip(motorShip, "red");
sailMarina.paintShip(sailShip, "blue");

//Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
// sailMarina.trade(motorShip); // ERROR
sailMarina.trade(sailShip);

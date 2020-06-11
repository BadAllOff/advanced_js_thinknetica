const ship = new Ship("Best ship", "Tesla", { x: 1, y: 1 });
ship.dropAnchor();
const ship2 = new Ship("Good ship 2");
const marina = new Marina({ x: 3, y: 3 });

ship.riseAnchor();
ship.moveTo({ x: 3, y: 3 });
marina.moor(ship);
ship.moveTo({ x: 3, y: 4 });
marina.unmoor(ship);
marina.unmoor(ship2);

// console.log(ship);
// console.log(ship.getAnchorDroped());
// // ship._isAnchorDroped = true; Так нельзя
// console.log(ship);
// console.log('  after 1 try', ship.getAnchorDroped());
// ship.speed = 0;
// ship.setAnchorDroped(true);
// console.log(ship);
// console.log(ship.getAnchorDroped());

// const car = {
//     model: 'Model X',
//     seats: 4,
// }

// dropAnchor(ship);
// dropAnchor(car);

// function dropAnchor(ship) {
//     console.log(ship);
//     console.log(typeof ship);

//     if (!(ship instanceof Ship))
//         throw new Error('Not a Ship');

//     ship.isAnchorDroped = true;
// }

// Save it

// const arr = {
//     '0': 'a',
//     '1': 'b',
//     length: 2,
// }

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

// Array.from(arr)
//      .forEach(item => console.log(item))

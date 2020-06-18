describe("Dockyard", () => {
  it("should build ship of proper type", () => {
    const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);

    assert.instanceOf(motorMarina.buildShip(), MotorShip);
  });

  it("should repear ship of proper type", () => {
    const ship = new MotorShip();
    const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);
    ship.damage = 5;
    motorMarina.repair(ship);

    expect(ship.damage).to.equal(0);
  });

  it("shouldn't repear ship of improper type", () => {
    const ship = new SailingShip();
    const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);
    ship.damage = 5;

    expect(() => motorMarina.repair(ship)).to.throw(
      `Sorry, here you can't repair your type of ship`
    );
  });

  it("should change color", () => {
    const ship = new SailingShip();
    const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);
    motorMarina.paintShip(ship, "red");

    expect(ship.color).to.equal("red");
  });

  it("should exchange ship of proper type", () => {
    let ship = new MotorShip();
    const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);
    let newShip = motorMarina.trade(ship);

    expect(ship).to.be.an.instanceof(MotorShip);
    expect(newShip).to.be.an.instanceof(MotorShip);
  });

  it("shouldn't exchange ship of improper type", () => {
    let ship = new SailingShip("Ship");
    const motorMarina = new MotorMarina({ x: 1, y: 1 }, MotorShip);

    expect(() => motorMarina.trade(ship)).to.throw(
      `Sorry, here you can't trade your type of ship`
    );
  });
});

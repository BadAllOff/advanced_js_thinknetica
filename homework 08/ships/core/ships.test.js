describe("Ship", () => {
  let ship;

  beforeEach(function () {
    ship = new Ship("Ship", "123");
  });

  it("constructor should create a ship", () => {
    expect(ship.name).to.equal("Ship");
    expect(ship.model).to.equal("123");
  });

  it("should calculate distance properly", () => {
    ship.moveTo({ x: 1, y: 1 });

    expect(+ship.distance.toFixed()).to.equal(1);
  });

  it(`shouldn't move if anchor is dropped`, () => {
    dropAnchor.call(ship);

    expect(() => ship.move()).to.throw("You need to rise anchor");
    expect(() => ship.moveTo()).to.throw("You need to rise anchor");
  });

  it(`should't move if direction is not provided`, () => {
    riseAnchor.call(ship);

    expect(() => ship.move()).to.throw("Wrong direction");
  });

  it("should move to position and calculate distance", () => {
    ship.moveTo({ x: 5, y: 10 });
    console.log(ship.distance);

    assert.deepEqual(ship.position, { x: 5, y: 10 });
    expect(ship.distance.toFixed()).to.not.equal(11);
  });

  it("should move to north", () => {
    ship.move("n");
    assert.deepEqual(ship.position, { x: 0, y: 1 });
  });

  it("should move to south", () => {
    ship.move("s");
    assert.deepEqual(ship.position, { x: 0, y: -1 });
  });

  it("should move to west", () => {
    ship.move("w");
    assert.deepEqual(ship.position, { x: -1, y: 0 });
  });

  it("should move to east", () => {
    ship.move("e");
    assert.deepEqual(ship.position, { x: 1, y: 0 });
  });
});

describe('utils', () => {
  let ship;

  beforeEach(function () {
      ship = new Ship('Ship', '123');
  });

  it('ship should have rised anchor by default', () => {
      expect(isAnchorDroped.call(ship)).to.equal(false);
  });

  it('ship should drop anchor', () => {
      dropAnchor.call(ship);
      expect(isAnchorDroped.call(ship)).to.equal(true);
  });

  it('ship should rise anchor', () => {
      dropAnchor.call(ship);
      riseAnchor.call(ship);
      expect(isAnchorDroped.call(ship)).to.equal(false);
  });
});
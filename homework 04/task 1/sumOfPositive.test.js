describe('sumOfPositive', () => {
  it('should return object with count and sum of positive numbers', () => {
    const result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
    assert.deepEqual(result, { count: 5, sum: 357 });
  });

  it('should return object with count and sum properties equal to 0', () => {
    const result = sumOfPositive([]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });

  it('should throw an Error with message', () => {
    assert.throws(() => sumOfPositive('[-91, -93, -45]'), Error, 'Input data shold be array of numbers');
  });

  it('should throw an Error with message if empty argument provided', () => {
    assert.throws(() => sumOfPositive(), Error, 'Input data shold be array of numbers');
  });

  it('should throw an Error with message if empty argument provided', () => {
    assert.throws(() => sumOfPositive(23), Error, 'Input data shold be array of numbers');
  });

  it('should return object with count and sum properties equal to 0', () => {
    const result = sumOfPositive([' ', ' ']);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
});
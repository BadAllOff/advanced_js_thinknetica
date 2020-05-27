// "12: 07 am" - "00:07"
// "03.2 pm" - "15:02"
// "1-17 am" - "01:17"
// "34:67" - выдать ошибку

describe('timeFormat', () => {
  it('empty test', () => {
  });
  it('3:03 pm', () => {
      const result = timeFormat('3:03 pm');
      assert.equal(result, '15:03');
  });
  it('am and delimiter "."', () => {
      const result = timeFormat('03.00 am');
      assert.equal(result, '03:00');
  });
  it('12:00 pm', () => {
      const result = timeFormat('12:00 pm');
      assert.equal(result, '12:00');
  });
  it('12:00 am', () => {
      const result = timeFormat('12:00 am');
      assert.equal(result, '00:00');
  });
  it('13:00 pm incorect', () => {
      const result = timeFormat('13:00 pm');
      assert.equal(result, 'invalid');
  });
  it('00-70', () => {
      const result = timeFormat('00-70');
      assert.equal(result, 'invalid');
  });
  it('bad data', () => {
      const result = timeFormat('bad data');
      assert.equal(result, 'invalid');
  });
  it('12:00 am', () => {
      const result = timeFormat('');
      assert.equal(result, '');
  });
  it('00:00 am', () => {
      const result = timeFormat('00:00 am');
      assert.equal(result, 'invalid');
  });
  it('12:56', () => {
      const result = timeFormat('12:56');
      assert.equal(result, 'invalid');
  });
  it('12:60 am', () => {
      const result = timeFormat('12:60 am');
      assert.equal(result, 'invalid');
  });
});
describe('wordStat', () => {
  it('should return object with word and sums of codes of all characters ', () => {
    const result = wordStat('Lorem ipsum dolor sit amet.');
    assert.deepEqual(result, [
      { word: 'Lorem', sum: 511 },
      { word: 'ipsum', sum: 558 },
      { word: 'dolor', sum: 544 },
      { word: 'sit', sum: 336 },
      { word: 'amet.', sum: 469 }
    ]);
  });

  it('should return another object with word and sums of codes of all characters ', () => {
    const result = wordStat('This is another test text');
    assert.deepEqual(result, [
      { word: "This", sum: 408 },
      { word: "is", sum: 220 },
      { word: "another", sum: 753 },
      { word: "test", sum: 448 },
      { word: "text", sum: 453 }      
    ]);
  });

  it('should throw an Error with message if empty argument provided', () => {
    assert.throws(() => wordStat(), Error, 'Пожалуйста введите текст.');
  });

  it('should throw an Error with message if number provided', () => {
    assert.throws(() => wordStat(23), Error, 'Пожалуйста введите текст.');
  });

  it('should throw an Error with message if wrong type argument provided', () => {
    assert.throws(() => wordStat(['this', 34]), Error, 'Пожалуйста введите текст.');
  });
});
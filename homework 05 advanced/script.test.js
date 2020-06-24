describe('parseTemplate', () => {
  let el = document.getElementById('item1');
  const data = { title: 'New title', description: 'new description' };
  const falseData = {};

  it('should throw error if no element provided', () => {
    expect(() => parseTemplate('', {})).to.throw('Please provide element');
  });

  it('should throw error if no object data provided', () => {
    expect(() => parseTemplate(el)).to.throw('Please provide an object with data');
  });

  it('should not throw error if all arguments provided', () => {
    expect(() => parseTemplate(el, data)).not.to.throw();
  });

  it('should modifies element correctly', () => {
    parseTemplate(el, data);

    expect(el.querySelector('h3').textContent).to.equal(data.title);
    expect(el.querySelector('p').textContent).to.equal(data.description);
  })
});
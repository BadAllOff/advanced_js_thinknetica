describe('parseTemplate', () => {
  let el = document.getElementById('item1');
  const data = { title: 'New title', description: 'new description' };
  const falseData = { falseTitle: 'New fake title', falseDescription: 'New fake description' };

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

  it('should not modifies element correctly', () => {
    expect(() => parseTemplate(el, falseData)).to.throw(`Element don't have proper property`);

    expect(el.querySelector('h3').textContent).not.to.equal(falseData.title);
    expect(el.querySelector('p').textContent).not.to.equal(falseData.description);
  })
});
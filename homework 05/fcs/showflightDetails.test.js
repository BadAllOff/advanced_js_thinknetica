describe('showflightDetails  ', () => {


  it('should throw error if flight name is not provided', () => {
    expect(() => showflightDetails('')).to.throw('No such flight');
  });

  it(`should append data to #flight-details div`, () => {
    showflightDetails('BH118');
    console.log(document.querySelector('#flight-details').textContent);

    expect(document.querySelector('#flight-details').firstElementChild.textContent).to.equal('Flight BH118 details');
    expect(document.querySelector('#flight-details').lastElementChild.tagName).to.equal('UL');
    expect(document.querySelector('#flight-details').textContent).to.include('Ivanov I. I', 'Petrov I. I.', 'Vasilyev I. I.');
  });

  it(`should contain data about all passengers in #flight-details div`, () => {
    showflightDetails('BH118');
    expect(document.querySelector('#flight-details').textContent).to.include('Ticket id',
    'Seat number',
    'Passenger name',
    'Registered',
    'Ivanov I. I',
    'Petrov I. I.',
    'Vasilyev I. I.');
  });
})
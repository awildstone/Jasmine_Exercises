 describe('calculateMonthlyPayment(values) tests', () => {
  
  it('should calculate the monthly rate correctly', () => {
    expect(calculateMonthlyPayment({amount: 300000, years: 30, rate: 4.5})).toEqual('1520.06');
    expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 8.75})).toEqual('206.37');
    expect(calculateMonthlyPayment({amount: 100000, years: 15, rate: 3})).toEqual('690.58');
    expect(calculateMonthlyPayment({amount: 5000, years: 1.5, rate: 6.7})).toEqual('292.74');

  });
  
  it('should return a result with 2 decimal places', () => {
    expect(calculateMonthlyPayment({amount: 40000, years: 20, rate: 4.5}).indexOf('.')).toBeTruthy();
    expect(calculateMonthlyPayment({amount: 15000, years: 5, rate: 7.25}).indexOf('.')).toBeTruthy();
    expect(calculateMonthlyPayment({amount: 100000, years: 30, rate: 3}).indexOf('.')).toBeTruthy();
    expect(calculateMonthlyPayment({amount: 5000, years: 1.5, rate: 6.7}).indexOf('.')).toBeTruthy();
  });

  it('should return Infinity if Term In Years is 0 or empty', () => {
    expect(calculateMonthlyPayment({amount: 40000, years: 0, rate: 4.5})).toEqual('Infinity');
    expect(calculateMonthlyPayment({amount: 40000, years: '', rate: 4.5})).toEqual('Infinity');

  });

  it('should return NaN if the Yearly Rate is 0 or empty', () => {
    expect(calculateMonthlyPayment({amount: 40000, years: 20, rate: 0})).toEqual('NaN');
    expect(calculateMonthlyPayment({amount: 40000, years: 20, rate: ''})).toEqual('NaN');
  });

 });



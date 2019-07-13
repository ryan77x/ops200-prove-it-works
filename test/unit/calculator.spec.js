const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should add 2 + -2 together correctly', () => {
    expect(calculator.add(2, -2)).to.equal(0);
  });

  it('should have a subtract function', () => {
    expect(calculator.subtract).to.exist;
  });

  it('should subtract 3 from 10 correctly', () => {
    expect(calculator.subtract(10, 3)).to.equal(7);
  });

  it('should subtract 10 from -10 correctly', () => {
    expect(calculator.subtract(-10, 10)).to.equal(-20);
  });

  it('should have a multiply function', () => {
    expect(calculator.multiply).to.exist;
  });

  it('should multiply 5 and 6 correctly', () => {
    expect(calculator.multiply(5, 6)).to.equal(30);
  });

  it('should multiply -5 and 6 correctly', () => {
    expect(calculator.multiply(-5, 6)).to.equal(-30);
  });

  it('should have a divide function', () => {
    expect(calculator.divide).to.exist;
  });

  it('should divide 11 from 55 correctly', () => {
    expect(calculator.divide(55, 11)).to.equal(5);
  });

  it('should divide -11 from 55 correctly', () => {
    expect(calculator.divide(55, -11)).to.equal(-5);
  });

  it('should display "Infiniy" when divide 0 from 5 correctly', () => {
    expect(calculator.divide(5, 0)).to.equal("Infinity");
  });
});
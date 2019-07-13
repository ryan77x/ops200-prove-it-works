const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    it('should have a monthlyPayment method', () => {
        mortgage = new Mortgage();
        expect(mortgage.monthlyPayment).to.exist;
    })
    
    it('should return correct monthly morgage payment when principal=10000, interest=5.5%, term=10yrs and period=12', () => {
        mortgage = new Mortgage(10000, 5.5, 10, 12);
        expect(mortgage.monthlyPayment()).to.equal(108.53);
    })

    it('should return correct monthly morgage payment when principal=100000, interest=4.5%, term=25yrs and period=12', () => {
        mortgage = new Mortgage(100000, 4.5, 25, 12);
        expect(mortgage.monthlyPayment()).to.equal(555.83);
    })

    it('should return correct monthly morgage payment when principal=300000, interest=4.0%, term=15yrs and period=12', () => {
        mortgage = new Mortgage(300000, 4.0, 15, 12);
        expect(mortgage.monthlyPayment()).to.equal(2219.06);
    })

    it('should return correct monthly morgage payment when principal=450000, interest=3.7%, term=30yrs and period=12', () => {
        mortgage = new Mortgage(450000, 3.7, 30, 12);
        expect(mortgage.monthlyPayment()).to.equal(2071.27);
    })

    it('should return correct monthly morgage payment when principal=654321, interest=3.2%, term=40yrs and period=12', () => {
        mortgage = new Mortgage(654321, 3.2, 40, 12);
        expect(mortgage.monthlyPayment()).to.equal(2418.41);
    })

    it('should return correct monthly morgage payment when principal=12345678, interest=1.9%, term=40yrs and period=12', () => {
        mortgage = new Mortgage(12345678, 1.9, 40, 12);
        expect(mortgage.monthlyPayment()).to.equal(36739.47);
    })

    it('should return correct monthly morgage payment when principal=12345678, interest=1.9%, term=40yrs and period=4', () => {
        mortgage = new Mortgage(12345678, 1.9, 40, 4);
        expect(mortgage.monthlyPayment()).to.equal(110334.76);
    })
});
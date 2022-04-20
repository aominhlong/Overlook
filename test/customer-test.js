import chai from 'chai';
const expect = chai.expect;
import { userCustomerData, bookingsSampleData, roomsSampleData } from '../test/sample-test-data'
import Customer from '../src/classes/Customer'

describe('Customer', () => {

    let customer1;
    let customer2;
    let bookings;
    let rooms;

    beforeEach(() => {
        customer1 = new Customer(userCustomerData[0]);
        customer2 = new Customer(userCustomerData[1]);
        bookings = bookingsSampleData;
        rooms = roomsSampleData;
    })

    it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    })

    it('Should instantiate a new customer', () => {
        expect(customer1).to.be.an.instanceof(Customer);
        expect(customer2).to.be.an.instanceof(Customer);
    })

    it('Should have a name', () => {
        expect(customer1.name).to.equal('Leatha Ullrich')
        expect(customer2.name).to.equal('Maria Lakin')
    })

    it('Should have an id', () => {
        expect(customer1.id).to.equal(1)
        expect(customer2.id).to.equal(15)
    })

    

})
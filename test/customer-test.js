import chai from 'chai';
const expect = chai.expect;
import { customerData, bookingsSampleData, roomsSampleData } from './test-data'
import Customer from '../src/classes/Customer'
import Hotel from '../src/classes/Hotel'

describe('Customer', () => {

    let customer1;
    let customer2;
    let bookings;
    let hotel;

    beforeEach(() => {
        hotel = new Hotel (roomsSampleData, customerData, bookingsSampleData)
        customer1 = new Customer(customerData[0], hotel);
        customer2 = new Customer(customerData[1], hotel);
        bookings = bookingsSampleData;
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

    it('Should know the rooms that they booked', () => {
        customer1.findRoomsBooked(bookingsSampleData)
        customer2.findRoomsBooked(bookingsSampleData)

        expect(customer1.roomsBooked).to.deep.equal([])
        expect(customer2.roomsBooked).to.deep.equal([
            {
                id: '5fwrgu4i7k55hl6tn',
                userID: 15,
                date: '2022/01/17',
                roomNumber: 5
              },
              {
                id: '8frrg24i7z55h96tn',
                userID: 15,
                date: '2022/08/13',
                roomNumber: 10
              }
        ])
    })

    it('Should not spent any more yet', () => {
        expect(customer1.totalSpent).to.equal(0)
        expect(customer2.totalSpent).to.equal(0)
    })

    it('Should know how much they spent if they have booked a room', () => {
        customer1.findRoomsBooked(bookingsSampleData)
        customer2.findRoomsBooked(bookingsSampleData)

        customer1.findMoneySpent(roomsSampleData)
        customer2.findMoneySpent(roomsSampleData)

        expect(customer1.totalSpent).to.equal(0)
        expect(customer2.totalSpent).to.equal(840.34)
    })

})
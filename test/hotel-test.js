import chai from 'chai';
const expect = chai.expect;
import { customerData, bookingsSampleData, roomsSampleData } from './test-data';
import Customer from '../src/classes/Customer';
import Hotel from '../src/classes/Hotel';

describe('Hotel', () => {

    let hotel;

    beforeEach(() => {
        hotel = new Hotel (roomsSampleData, customerData, bookingsSampleData)
    })

    it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    })

    it('Should have a list of rooms available', () => {
        expect(hotel.roomsAvailable).to.deep.equal(roomsSampleData)
    })

    it('Should have a list of all the customers', () => {
        expect(hotel.customerList).to.deep.equal(customerData)
    })

    it('Should have a list of all of the booked rooms', () => {
        expect(hotel.bookedRooms).to.deep.equal(bookingsSampleData)
    })

    it('Should be able to filter the rooms available', () => {
        hotel.filterRooms('single room')
        expect(hotel.filteredRooms).to.deep.equal([
        {
            number: 5,
            roomType: "single room",
            bidet: true,
            bedSize: "queen",
            numBeds: 2,
            costPerNight: 340.17
        },
        {
            number: 10,
            roomType: "single room",
            bidet: true,
            bedSize: "queen",
            numBeds: 2,
            costPerNight: 500.17
        }
        ])
    })





})
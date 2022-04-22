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
        expect(Hotel).to.be.a('function');
    })

    it('Should have a list of all the customers', () => {
        expect(hotel.customerList).to.deep.equal(customerData)
    })

    it('Should have a list of all of the booked rooms', () => {
        expect(hotel.roomsUnavailable).to.deep.equal(bookingsSampleData)
    })

    it('Should be able to filter the rooms available', () => {
        hotel.filterRoomsByType('single room')
        expect(hotel.filteredRoomsAvailable).to.deep.equal([
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

    it('Should filter a room by date', () => {
        hotel.filterRoomsByDate('2022/08/13')

        expect(hotel.filteredRoomsAvailable).to.deep.equal([
            {
                number: 5,
                roomType: 'single room',
                bidet: true,
                bedSize: 'queen',
                numBeds: 2,
                costPerNight: 340.17
              },
              {
                number: 13,
                roomType: 'junior suite',
                bidet: true,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 397.02
              }
        ])

    })

    it('Should apologize if there are no rooms available on the specific date', () => {
        hotel.filterRoomsByDate('2020/09/13')
        expect(hotel.filterRoomsByDate()).to.equal('We are so sorry. It looks like there are no rooms currently available on this date.')
    })



})
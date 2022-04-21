class Hotel {
    constructor(roomsSampleData, customerData, bookingsSampleData) {
        this.customerList = customerData;
        this.roomsAvailable = roomsSampleData
        this.roomsUnavailable = bookingsSampleData
        this.filteredRoomsAvailable = []
    }
    
    filterRoomsByType(roomType) {
        this.roomsAvailable.forEach((room) => {
            if (room.roomType === roomType) {
                this.filteredRoomsAvailable.push(room)
            }
        })
    }

    filterRoomsByDate(date) {
        //2022/08/13
        let filterBookings = this.roomsUnavailable.filter((booking) => {
            return booking.date === date
        })

        this.roomsAvailable.forEach((room) => {
            filterBookings.forEach((booking) => {
                if (room.number !== booking.roomNumber) {
                    this.filteredRoomsAvailable.push(room)
                }
            })
        })
        if (this.filteredRoomsAvailable.length === 0) {
            return 'We are so sorry. It looks like there are no rooms currently available on this date.'
        }
    }

}
export default Hotel
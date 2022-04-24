class Hotel {
    constructor(roomsData, customerData, bookingsData) {
        this.customerList = customerData;
        this.roomsAvailable = roomsData
        this.roomsUnavailable = bookingsData
        this.filteredRooms;
        this.unbookedRooms = []
    }
    
    filterRoomsByType(roomType) {
        this.roomsAvailable.forEach((room) => {
            if (room.roomType === roomType) {
                this.filteredRoomsAvailable.push(room)
            }
        })
    }

    filterRoomsByDate(date) {
        let filteredRoomsAvailable = []
        this.unbookedRooms = []

        this.roomsAvailable.forEach((room) => filteredRoomsAvailable.push(room))

        let filterBookings = this.roomsUnavailable.filter((booking) => {
            return booking.date === date.split('-').join('/')
        })

        filterBookings.forEach((booking) => {
            filteredRoomsAvailable.forEach((room, index) => {
                if (parseInt(room.number) === parseInt(booking.roomNumber)) {
                    this.unbookedRooms.push(room)
                    filteredRoomsAvailable.splice(index, 1)
                }
            })
        })
        return filteredRoomsAvailable
    }

    filterRoomsByBoth(date, roomType) {
        let filteredRoomsAvailable = []
        this.roomsAvailable.forEach((room) => filteredRoomsAvailable.push(room))
        let filterBookings = this.roomsUnavailable.filter((booking) => {
            return booking.date === date.split('-').join('/')
        })

        filteredRoomsAvailable.forEach((room, index) => {
            filterBookings.forEach((booking) => {
                if (room.number === booking.roomNumber) {
                    filteredRoomsAvailable.splice(index, 1)
                }
            })
        })

        return filteredRoomsAvailable.filter((room) => {
            return room.roomType === roomType
        })
    }    
}
export default Hotel
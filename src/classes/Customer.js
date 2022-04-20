class Customer {
    constructor(data, roomsSampleData) {
        this.name = data.name
        this.id = data.id
        this.roomsBooked = []
        this.totalSpent = 0
        this.filteredRoomsAvailable = []
        this.roomsAvailable = roomsSampleData
    }

    findRoomsBooked(bookingData) {
        bookingData.forEach((room) => {
            if (this.id === room.userID) {
                this.roomsBooked.push(room)
            } else {
                return 'You do not have a booking with us.'
            }
        })   
    }

    findMoneySpent(roomData) {
        let roomDetail = [];
        this.roomsBooked.forEach((roomBooked) => {
            roomData.forEach((room) => {
                if (roomBooked.roomNumber === room.number) {
                    roomDetail.push(room)
                }
            })
        })

        this.totalSpent = roomDetail.reduce((acc, room) => {
            acc += room.costPerNight
            return acc
        }, 0)
    }

    filterRoomsByType(roomType) {
        this.roomsAvailable.forEach((room) => {
            if (room.roomType === roomType) {
                this.filteredRoomsAvailable.push(room)
            }
        })
    }

    filterRoomsByDate(date, bookingsSampleData) {
        let newBookings = []
        bookingsSampleData.forEach((booking) => {
            if (booking.date !== date) {
                array.push(booking)
            }
        })
        


        console.log(array)
    }

}

export default Customer 
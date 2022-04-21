class Customer {
    constructor(data, roomsSampleData, bookingsSampleData) {
        this.name = data.name
        this.id = data.id
        this.roomsBooked = []
        this.totalSpent = 0
        this.filteredRoomsAvailable = []
        this.roomsAvailable = roomsSampleData
        this.roomsUnavailable = bookingsSampleData
    }

    findRoomsBooked() {
        this.roomsUnavailable.forEach((room) => {
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
    }

}

export default Customer 
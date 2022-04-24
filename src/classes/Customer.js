class Customer {
    constructor(customerData, hotel) {
        this.name = customerData.name
        this.id = customerData.id
        this.roomsBooked = []
        this.totalSpent = 0
        this.roomsAvailable = hotel.roomsAvailable
        this.bookedRooms = hotel.roomsUnavailable
    }

    findRoomsBooked(bookedRooms) {
        bookedRooms.forEach((room) => {
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

    

}

export default Customer 
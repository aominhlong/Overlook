class Customer {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.roomsBooked = []
        this.totalSpent = 0
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

}

export default Customer 
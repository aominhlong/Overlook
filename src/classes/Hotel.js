class Hotel {
    constructor(roomsSampleData, customerData, bookingsSampleData) {
        this.roomsAvailable = roomsSampleData;
        this.customerList = customerData;
        this.bookedRooms = bookingsSampleData;
        this.filteredRooms = []
    }
    
    filterRooms(e) {
        this.filteredRooms = []
        this.roomsAvailable.forEach((room) => {
            if (room.roomType === e) {
                this.filteredRooms.push(room)
            }
        })
    }
}
export default Hotel
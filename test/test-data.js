let customerData = [
    {
        id: 1,
        name: "Leatha Ullrich"
    },
    {
        id: 15,
        name: "Maria Lakin"
    }
]

let bookingsSampleData = [
    {
        id: "5fwrgu4i7k55hl6tn",
        userID: 15,
        date: "2022/01/17",
        roomNumber: 5
    },
    {
        id: "8frrg24i7z55h96tn",
        userID: 15,
        date: "2022/06/07",
        roomNumber: 10
    },
    {
        id: "5fwrgu4i7k55hl6to",
        userID: 46,
        date: "2022/02/22",
        roomNumber: 13
    }
]

let roomsSampleData = [
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
    },
    {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02
    }
]

export { customerData, bookingsSampleData, roomsSampleData }
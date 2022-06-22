let rooms = `https://overlook-api-na.herokuapp.com/api/v1/rooms`
let customers = `https://overlook-api-na.herokuapp.com/api/v1/customers`
let bookings = `https://overlook-api-na.herokuapp.com/api/v1/bookings`



const specificUserData = (id) => {
    return fetch(`https://overlook-api-na.herokuapp.com/api/v1/customers/${id}`)
    .then(response => response.json())
    .catch(err => console.log('Error getting specific customer data'))
}

const allCustomersData = () => {
    return fetch(customers)
    .then(response => response.json())
    .catch(err => console.log('Error getting customer data'))
}

const allRoomsData = () => {
    return fetch(rooms)
    .then(response => response.json())
    .catch(err => console.log('Error getting rooms data'))
}

const allBookingsData = () => {
    return fetch(bookings)
    .then(response => response.json())
    .catch(err => console.log('Error getting bookings data'))
}



export { specificUserData, allCustomersData, allRoomsData, allBookingsData }
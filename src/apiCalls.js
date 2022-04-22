let rooms = `http://localhost:3001/api/v1/rooms`
let customers = `http://localhost:3001/api/v1/customers`
let bookings = `http://localhost:3001/api/v1/bookings`



const specificUserData = (id) => {
    return fetch(`http://localhost:3001/api/v1/customers/15`) //replace one with id and interpolate user login num
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const allCustomersData = () => {
    return fetch(customers)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const allRoomsData = () => {
    return fetch(rooms)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}

const allBookingsData = () => {
    return fetch(bookings)
    .then(response => response.json())
    .catch(err => console.log('ERROR'))
}


export { specificUserData, allCustomersData, allRoomsData, allBookingsData }
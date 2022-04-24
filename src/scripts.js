// This is the JavaScript entry file - your code begins here
import { specificUserData, allCustomersData, allRoomsData, allBookingsData } from './apiCalls'
import Hotel from './classes/Hotel'
import Customer from './classes/Customer'

const topHalf = document.querySelector('.top-half')
const bottomHalf = document.querySelector('.bottom-half')
const currentBookings = document.querySelector('.current-bookings')
const userArea = document.querySelector('.user-info')
const calendar = document.querySelector('.calendar')
const checkDateBtn = document.querySelector(".check-date-btn")

// **login page selectors**
const loginBtn = document.querySelector('.login-btn')
const loginPage = document.querySelector('.login-page')
const dashboardTitle = document.querySelector('.title')
const username = document.querySelector('input[type="text"]')

// **filter dates**
const selectRoomType = document.querySelector('#type-selection')
const date = document.querySelector('input[type="date"]')

let allData = []
let hotel;
let customer;
let bookingsData;
let roomsData;
let customers;

const getData = (id) => {
  return Promise.all([
    specificUserData(id),
    allCustomersData(),
    allRoomsData(),
    allBookingsData()
  ])
  .then(data => {
    data.forEach((item) => {
      allData.push(item)
    })
  })
  .then(getData => {
    bookingsData = allData[3].bookings
    roomsData = allData[2].rooms
    customers = allData[1].customers
    findUserLoginId(customers)
    hotel = new Hotel(roomsData, allData[1], bookingsData)
    customer = new Customer(allData[0], hotel)
    populateBookingArea()
  })
}

const userName = document.querySelector('.customer-name')
const customerId = document.querySelector('.customer-id')
const moneySpent = document.querySelector('.money-spent')
const pastBooked = document.querySelector('.pastBooked')

const populateBookingArea = () => {
  customer.findRoomsBooked(bookingsData)
  customer.findMoneySpent(roomsData)
  userName.innerText = customer.name
  customerId.innerText = `id: ${customer.id}`
  moneySpent.innerText = `Total Spent: $${customer.totalSpent.toFixed(2)}`
  
  customer.roomsBooked.forEach((roomBooked) => {
    pastBooked.innerHTML += `
    <section class="roomBooked">
    date: ${roomBooked.date}
    <br>
    room Number: ${roomBooked.roomNumber}
    </section>`
  })
}

//On login button click, invoke function to fetch
//all data, pass in argument as user number




// ***** ON WINDOW LOAD *****
window.addEventListener('load', () => {
    hideAll([topHalf, bottomHalf, roomsAvailablePage])
})


const roomsAvailableSection = document.querySelector('.room-available-container')
const roomsAvailablePage = document.querySelector('.rooms-available-page')

// ***** LOGIN PAGE *****
checkDateBtn.addEventListener('click', (event) => {
  event.preventDefault()
  roomsAvailableSection.innerHTML = ''
    if (selectRoomType.value === 'All options') {
      hotel.filterRoomsByDate(date.value).forEach((room) => {
        roomsAvailableSection.innerHTML += `
        <section class="room-available">
          <section class="room">
            Room Number: ${room.number}
            <br>
            Room Type: ${room.roomType}
            <br>
            Bed Size: ${room.bedSize}
            <br>
            Beds: ${room.numBeds}
            <br>
            Price Per Night: ${room.costPerNight}
          </section>
          <button class="button" id="${room.number}">Book Now</button>
        </section>
        `
      })
    hideAll([topHalf, bottomHalf])
  } else {
    hotel.filterRoomsByDate(date.value, selectRoomType.value).forEach((room) => {
      roomsAvailableSection.innerHTML += `
      <section class="room-available">
        <section class="room">
          Room Number: ${room.number}
          <br>
          Room Type: ${room.roomType}
          <br>
          Bed Size: ${room.bedSize}
          <br>
          Beds: ${room.numBeds}
          <br>
          Price Per Night: ${room.costPerNight}
        </section>
        <button class="button" id="${room.number}">Book Now</button>
      </section>
      `
    })
  }
  showAll([roomsAvailablePage])
})


const goHome = document.querySelector('.go-home')
goHome.addEventListener('click', () => {
  showAll([topHalf, bottomHalf])
  hideAll([roomsAvailablePage])
})



loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    hideAll([loginPage])
    showAll([topHalf, bottomHalf])
    getData(parseInt(findUserLoginId()[0]))
    findUserLoginId()
})


let findUserLoginId = (customer) => {
  let userLogin = username.value
  let matchNum = userLogin.match(/\d+/)
  if (matchNum) {
    return matchNum
  }
}
// FIX LOGIN




// ***** DASHBOARD *****
const hideAll = (array) => {
  array.forEach((element) => {
    element.classList.add("hidden")
  })
}

const showAll = (array) => {
  array.forEach((element) => {
    element.classList.remove("hidden")
  })
}



//Post request
roomsAvailablePage.addEventListener('click', (event) => {
  if (event.target.className === 'button') {
    postRequest(event)
  }
})


const postRequest = (event) => {
  let postDate = date.value.split('-').join('/')

  fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify(
      { "userID": parseInt(customerId.innerText.match(/\d+/)[0]), 
      "date": postDate, 
      "roomNumber": parseInt(event.target.id) }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(refetch  => {
    allBookingsData()
    .then(data => {
      allData[3] = data
      bookingsData = allData[3].bookings
    })
  })
  .then(show => {
    getData(parseInt(customerId.innerText.match(/\d+/)[0]))
    showAll([topHalf, bottomHalf])
    hideAll([roomsAvailablePage])
    // title.innerText = "Booking confirmed. Enjoy your next stay!"
  })
}

const title = document.querySelector('.title')










// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



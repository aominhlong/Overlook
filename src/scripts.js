// This is the JavaScript entry file - your code begins here
import { specificUserData, allCustomersData, allRoomsData, allBookingsData } from './apiCalls'
import Hotel from './classes/Hotel'
import Customer from './classes/Customer'

const topHalf = document.querySelector('.top-half')
const bottomHalf = document.querySelector('.bottom-half')
const currentBookings = document.querySelector('.current-bookings')
const userArea = document.querySelector('.user-info')
const date = document.querySelector('input[type="date"]')
const checkDateBtn = document.querySelector(".check-date-btn")

// **login page selectors**
const loginBtn = document.querySelector('.login-btn')
const loginPage = document.querySelector('.login-page')
const dashboardTitle = document.querySelector('.title')
const username = document.querySelector('input[type="text"]')

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
  ]).then(data => {
    data.forEach((item) => {
      allData.push(item)
    })
    console.log(allData)
    bookingsData = allData[3].bookings
    roomsData = allData[2].rooms
    customers = allData[1].customers
    findUserLoginId(customers)
    hotel = new Hotel(roomsData, allData[1], bookingsData)
    console.log('hotel', hotel)
    console.log(allData)
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
  // console.log(customer)
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
    hideAll([topHalf, bottomHalf])
})

const selectRoomType = document.querySelector('#type-selection')


// ***** LOGIN PAGE *****
checkDateBtn.addEventListener('click', (event) => {
  event.preventDefault()
    hotel.roomsAvailable = roomsData
    hotel.filterRoomsByDate(date.value)

    if (selectRoomType.value === 'All options') {
      console.log('only by date', hotel.filterRoomsByDate(date.value))
    } else {
      console.log('by both', hotel.filterRoomsByBoth(date.value, selectRoomType.value))
    }
  })


loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    hideAll([loginPage])
    showAll([topHalf, bottomHalf])
    getData(parseInt(findUserLoginId()[0]))
    findUserLoginId()
})


const roomTypeDropDown = document.querySelector('.type')


let findUserLoginId = (customer) => {
  console.log('cust', customer)

  let userLogin = username.value
  let matchNum = userLogin.match(/\d+/)
  if (matchNum) {
    return matchNum
  }
  // if (matchNum && userLogin.includes(`customer`)
  // && userLogin.length >= 9 && userLogin.length <= 10) {
  //   return matchNum
  // }
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


// ****** SEARCH FOR DATE ******










// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

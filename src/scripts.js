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


const getData = (id) => {
  return Promise.all([
    specificUserData(id),
    allCustomersData(),
    allRoomsData(),
    allBookingsData()
  ]).then(data => {
    data.forEach((data) => {
      allData.push(data)
    })
    console.log(allData)
    bookingsData = allData[3].bookings
    roomsData = allData[2].rooms
    hotel = new Hotel(allData[2], allData[1], allData[3])
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
  console.log(customer)
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


// ***** LOGIN PAGE *****
checkDateBtn.addEventListener('click', () => {
    checkDate()
})

const checkDate = () => {
    console.log(date.value)
}

loginBtn.addEventListener('click', (event) => {
  // console.log('user', username.value)
    event.preventDefault()
    hideAll([loginPage])
    showAll([topHalf, bottomHalf])
    getData(parseInt(findUserLoginId()[0]))
    // findUserLoginId()
    // console.log(findUserLoginId()[0])
})

let findUserLoginId = () => {
  let userLogin = username.value
  let matchNum = userLogin.match(/\d+/)
  if (matchNum) {
    console.log('hi')
    return matchNum
  }
}




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












// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

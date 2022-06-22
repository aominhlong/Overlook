// This is the JavaScript entry file - your code begins here
import { specificUserData, allCustomersData, allRoomsData, allBookingsData } from './apiCalls'
import Hotel from './classes/Hotel'
import Customer from './classes/Customer'

// ***** QUERY SELECTORS *****
const topHalf = document.querySelector('.top-half')
const bottomHalf = document.querySelector('.bottom-half')
const checkDateBtn = document.querySelector(".check-date-btn")
const roomsAvailableSection = document.querySelector('.room-available-container')
const roomsAvailablePage = document.querySelector('.rooms-available-page')
const userName = document.querySelector('.customer-name')
const customerId = document.querySelector('.customer-id')
const moneySpent = document.querySelector('.money-spent')
const pastBooked = document.querySelector('.pastBooked')
const currentBooking = document.querySelector('.currentBooking')
const noBookingParagraph = document.querySelector('.no-bookings')
const cal = document.querySelector('#calen')
const goHome = document.querySelector('.go-home')
const noDateErrorMessage = document.querySelector('.error-no-date-chosen')
const confirmMessage = document.querySelector('.confirm-message')
const loginBtn = document.querySelector('.login-btn')
const loginPage = document.querySelector('.login-page')
const username = document.querySelector('input[type="text"]')
const password = document.querySelector('.password')
const loginErrorMsg = document.querySelector('.login-error')
const selectRoomType = document.querySelector('#type-selection')
const date = document.querySelector('input[type="date"]')
const errorPage = document.querySelector('.error-page')
const roomAvailableTitle = document.querySelector('.rooms-available-title')

// ***** GLOBAL VARIABLES *****
let allData = []
let hotel;
let customer;
let bookingsData;
let roomsData;
let customers;


// ***** EVENT LISTENERS *****
window.addEventListener('load', () => {
  hideAll([topHalf, bottomHalf, roomsAvailablePage])
})

roomsAvailablePage.addEventListener('click', (event) => {
  confirmRoom(event)
})

checkDateBtn.addEventListener('click', (event) => {
  event.preventDefault()
  checkCalendarValue()
  noRoomsAvailable()
})

loginBtn.addEventListener('click', (event) => {
  event.preventDefault()
  checkLogin()
})

goHome.addEventListener('click', () => {
  showAll([topHalf, bottomHalf])
  hideAll([roomsAvailablePage])
  reDisplayRoomTitle()
})

// ***** FETCH DATA *****
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
    hotel = new Hotel(roomsData, allData[1], bookingsData)
    customer = new Customer(allData[0], hotel)
    findUserLoginId(customers)
    populateBookingArea()
  })
  .catch(err => {
    hideAll([topHalf, bottomHalf, roomsAvailablePage, loginPage])
    showAll([errorPage])
  })
}


// ***** DASHBOARD *****
const populateBookingInformation = () => {
  customer.roomsBooked.forEach((roomBooked) => {
    pastBooked.innerHTML += `
    <section tabindex='0' class="roomBooked">
      date: ${roomBooked.date}
      <br>
      room Number: ${roomBooked.roomNumber}
    </section>`
  
    if(roomBooked.date >= setCurrentDay('/')) {
      currentBooking.innerHTML += `
        <section tabindex='0' class="roomBooked">
          date: ${roomBooked.date}
          <br>
          room Number: ${roomBooked.roomNumber}
        </section>`
    }
      if (bookingsData.length > 1008) {
        hideAll([noBookingParagraph])
      }
  })
}

const populateBookingArea = () => {
  customer.findRoomsBooked(bookingsData)
  customer.findMoneySpent(roomsData)
  userName.innerText = customer.name
  customerId.innerText = `id: ${customer.id}`
  moneySpent.innerText = `Total Spent: $${customer.totalSpent.toFixed(2)}`
  populateBookingInformation()
}

const populateAvailableOne = () => {
  hotel.filterRoomsByDate(date.value).forEach((room) => {
    roomsAvailableSection.innerHTML += `
    <section tabindex='0' class="room-available">
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

const populateAvailableTwo = () => {
  hotel.filterRoomsByBoth(date.value, selectRoomType.value).forEach((room) => {
    roomsAvailableSection.innerHTML += `
    <section tabindex='0' class="room-available">
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

const populateAvailablePage = () => {
  roomsAvailableSection.innerHTML = ''
  if (selectRoomType.value === 'All options') {
    populateAvailableOne()
  } else {
    populateAvailableTwo()
  }
  hideAll([topHalf, bottomHalf])
  showAll([roomsAvailablePage])
}

const checkCalendarValue = () => {
  if (cal.value === '') {
    showAll([noDateErrorMessage])
    setTimeout(() => {
      hideAll([noDateErrorMessage])
    }, 3000)
    return
  } else {
    populateAvailablePage()
  }
}


// ***** LOGIN PAGE *****
const checkLogin = () => {
  if (findUserLoginId() !== undefined) {
    hideAll([loginPage, loginErrorMsg])
    showAll([topHalf, bottomHalf])
    getData(parseInt(findUserLoginId()[0]))
    findUserLoginId()
  } else {
    showAll([loginErrorMsg])
  }
  cal.min = setCurrentDay('-')
}

const findUserLoginId = (customers) => {
  let userLogin = username.value
  let matchNum = userLogin.match(/\d+/)[0]
  let passwordLogin = password.value
 
  if (userLogin.includes('customer') && userLogin[8] !== '0' && matchNum && passwordLogin === 'overlook2021') {
    return matchNum
  }
}


// ***** CONFIRM ROOM MESSAGE *****
const confirmRoom = (event) => {
  if (event.target.className === 'button') {
    postRequest(event)
    showAll([confirmMessage])
    setTimeout(() => {
      hideAll([confirmMessage])
    }, 4000)
  }
}


// ***** POST REQUEST *****
const postRequest = (event) => {
  let postDate = date.value.split('-').join('/')

  fetch(`https://overlook-api-na.herokuapp.com/api/v1/bookings`, {
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
      customer.findRoomsBooked(bookingsData)
    })
  })
  .then(show => {
    repopulatePage()
  })
}

const repopulatePage = () => {
  getData(parseInt(customerId.innerText.match(/\d+/)[0]))
  showAll([topHalf, bottomHalf])
  hideAll([roomsAvailablePage, noBookingParagraph])
  currentBooking.innerHTML = ''
}


// ***** OTHER FUNCTIONS *****
const setCurrentDay = (sp) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; 
  let yyyy = today.getFullYear();

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;
  return (yyyy+sp+mm+sp+dd);
  };

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
  
  const reDisplayRoomTitle = () => {
    roomAvailableTitle.innerText = 'Rooms Available'
  }
  
  const noRoomsAvailable = () => {
    if (roomsAvailableSection.children.length === 0) {
      roomAvailableTitle.innerText = 'Sorry! No rooms are available for this date.'
    }
  }



// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



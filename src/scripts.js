// This is the JavaScript entry file - your code begins here
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



// *****On Window load*****
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
    event.preventDefault()
    hideAll([loginPage])
    showAll([topHalf, bottomHalf])
})


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

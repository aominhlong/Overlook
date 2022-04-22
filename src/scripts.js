// This is the JavaScript entry file - your code begins here
const topHalf = document.querySelector('top-half')
const currentBookings = document.querySelector('current-bookings')
const userArea = document.querySelector('user-info')



const checkDateBtn = document.querySelector(".check-date-btn")
const date = document.querySelector('input[type="date"]')

checkDateBtn.addEventListener('click', () => {
    checkDate()
})

const checkDate = () => {
    console.log(date.value)
}
// *****On load*****
window.addEventListener('load', () => {
 
})


// ***** DASHBOARD *****
const createMainPage = () => {
    hideAll([topHalf, currentBookings, userArea])
}

const hideAll = (array) => {
  array.forEach((element) => {
    element.classList.add("hidden")
  })
}
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

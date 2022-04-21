// This is the JavaScript entry file - your code begins here




const checkDateBtn = document.querySelector(".check-date-btn")
const date = document.querySelector('input[type="date"]')

checkDateBtn.addEventListener('click', () => {
    checkDate()
})

const checkDate = () => {
    console.log(date.value)
}


// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

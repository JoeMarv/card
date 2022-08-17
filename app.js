const form = document.querySelector('.form')
const submitState = document.querySelector('.submit-state')
const name = document.querySelector('.name')
const cardName = document.querySelector('.card-name')
const number = document.querySelector('.number')
const cardNumber = document.querySelector('.card-number')
const month = document.querySelector('.mm')
const cardMonth = document.querySelector('.card-month')
const year = document.querySelector('.yy')
const cardYear = document.querySelector('.card-year')
const cvc = document.querySelector('.cvc')
const submitBtn = document.querySelector('.submit-btn')
const continueBtn = document.querySelector('.continue-btn')


//NAME
name.addEventListener('keyup', function(e) {
    cardName.textContent = name.value
})



//NUMBER
number.addEventListener('keyup', function(e) {
    cardNumber.textContent = number.value
})



//MONTH
month.addEventListener('keyup', function(e) {
    cardMonth.textContent = month.value
})



//YEAR
year.addEventListener('keyup', function(e) {
    cardYear.textContent = year.value
})



//FUNCTIONS
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
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
const inputs = document.querySelectorAll('input')



//FORM
form.addEventListener('submit', function (e) {
    e.preventDefault()
})


//NAME
name.addEventListener('keyup', function(e) {
    cardName.textContent = name.value
})

name.addEventListener('invalid', function() {
    this.setCustomValidity(' ')
})



//NUMBER
number.addEventListener('keyup', function(e) {
    cardNumber.textContent = number.value
})

number.onkeydown = function () {
    if (number.value.length > 0) {

        if (number.value.length % 4 == 0) {
            number.value += "    ";
        }
    }
}


number.addEventListener('invalid', function() {
    this.setCustomValidity(' ')
})



//MONTH
month.addEventListener('keyup', function(e) {
    cardMonth.textContent = month.value
})


month.addEventListener('invalid', function() {
    this.setCustomValidity(' ')
})



//YEAR
year.addEventListener('keyup', function(e) {
    cardYear.textContent = year.value
})


year.addEventListener('invalid', function() {
    this.setCustomValidity(' ')
})



//CVC
cvc.addEventListener('invalid', function() {
    this.setCustomValidity(' ')
})


//BUTTON 
inputs.forEach(function(input) {
    submitBtn.addEventListener('click', function() {
        if (input.value.length === 0) {
            input.parentElement.classList.add('error')
            return false
        }

        else {
            input.parentElement.classList.remove('error')

            submitState.classList.add('show')
            form.classList.add('show')
            return true
        }
    })
})

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
})



continueBtn.addEventListener('click', function() {
    submitState.classList.remove('show')
    form.classList.remove('show')

    cardName.textContent = 'Jane Appleseed'
    cardNumber.textContent = '0000 0000 0000 0000'
    cardMonth.textContent = '00'
    cardYear.textContent = '00'
    name.value = ''
    number.value = ''
    month.value = ''
    year.value = ''
    cvc.value = ''
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
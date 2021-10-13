// onclick function

function toggleMobileNav() {
    let mobileNav = document.getElementById('mobile-nav')
    let body = document.querySelector('body')
    if (mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show')
        body.classList.remove('lock-screen')
    }
    else{
        mobileNav.classList.add('show')
        body.classList.add('lock-screen')
    }
}

// Apply header styles on scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('scrolling-active', window.scrollY > 0)
})

// Styles for the modals
let modal = document.getElementById('modal');
let signUp = document.getElementById('sign-up')
let signIn = document.getElementById('sign-in');
let firstModal = document.getElementById('first-modal');

function openModal() {
    let body = document.querySelector('body')
    if (modal.classList.contains('show')) {
        modal.classList.remove('show')
        body.classList.remove('lock-screen')
    }
    else{
        modal.classList.add('show')
        modal.classList.add('lock-screen')
        signIn.style.display = "block"
    }
}

function openSignUp () {
    closeAll()
    signUp.style.display = "block"
}

function openSignIn () {
    closeAll()
    signIn.style.display = 'block'
}

function openFirstModal () {
    closeAll()
    firstModal.style.display = 'block'
}

function closeAll () {
    signIn.style.display = "none"
    signUp.style.display = "none"
    firstModal.style.display = "none"
}

function closeSignInModal () {
    let modal = document.getElementById('modal');
    modal.classList.remove('show')
    closeAll();
}

function closeSignUpModal () {
    let signUp = document.getElementById('sign-up')
    signUp.style.display = 'none'
}

window.onclick = function(event) {
    let signUp = document.getElementById('sign-up')
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        // modal.classList.remove('show');
        closeSignInModal()
    }
    if (event.target == signUp) {
        // signUp.style.display = 'none'
        closeSignUpModal();
    }
}

// Quiz questions
let questions = document.querySelectorAll(".quiz")
let questionWrap = document.querySelector(".quiz-wrap")
let leftButton = document.querySelectorAll(".left-button")
let rightButton = document.querySelectorAll(".right-button")
// To check if an input has been selected
let passportValues = document.querySelectorAll("input[name = 'passport']")
let nameChangeValues = document.querySelectorAll("input[name = 'name-change']")
let licenseValues = document.querySelectorAll("input[name = 'license']")

// Store all values in an array according to how they appear on the html so that their index matches the index of the buttons
let arr = [passportValues, nameChangeValues, licenseValues]
let fix;

leftButton[0].classList.add('first-button')
leftButton.forEach((button, index) => {
    button.addEventListener ('click', () => {
        for (x of arr[index]) {
            if(x.checked) {
                fix = true
            }
        }
        if(index != 0) {
            questionWrap.style.left = `${0 - ((index - 1)*100)}vw`
        }
        // Set fix to false so that the value resets for a new question     
    })
})
rightButton.forEach((button, index) => {
    button.addEventListener ('click', () => {
        for (x of arr[index]) {
            if(x.checked) {
                fix = true
                
                console.log(x.value)
            }
        }
        if(fix) {
            questionWrap.style.left = `${0 - ((index + 1)*100)}vw`
        }
        fix = false      
    })
})




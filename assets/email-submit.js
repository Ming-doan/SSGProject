// Show Snack Bar
const snackBar = document.querySelector("#snackBar")

function showSnackBar(message) {
    snackBar.innerHTML = message
    snackBar.classList.add('active')
    setTimeout(() => {
        snackBar.classList.remove('active')
    }, 3000)
}

// Email Submit handler
const emailInput = document.querySelector('#emailInput')
const emailBtn = document.querySelector('#emailBtn')

emailBtn.addEventListener('click', () => {
    emailInput.value = ''
    showSnackBar('Your email has been submitted')
})

// Copy email to clipboard
const email = document.querySelector('#email')

email.addEventListener('click', () => {
    navigator.clipboard.writeText('minhdqde170407@gmail.com')
    showSnackBar('Copied to Clipboard')
})
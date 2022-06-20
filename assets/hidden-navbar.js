// Navigation Bar Scroll
const navbar = document.querySelector('.header')

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop <= 180) {
        navbar.classList.remove('is-top')
    } else {
        navbar.classList.add('is-top')
    }
})
// Navigation Bar Scroll
const scrollToTop = document.querySelector('#scrollToTop')

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop <= 180) {
        scrollToTop.style.display = 'none'
    } else {
        scrollToTop.style.display = 'flex'
    }
})

// Videos
const videoContainer = document.querySelector('#videoContainer')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

const videoList = [
    'https://www.youtube.com/embed/VjGOVM7zDZI',
    'https://www.youtube.com/embed/D0h2jVKbnNA',
    'https://www.youtube.com/embed/_akC0MOxdV0',
    'https://www.youtube.com/embed/TpmVzBcP70U'
]

let currentVideo = 1

function getRange() {
    if (currentVideo == videoList.length) {
        currentVideo = 0
    }
    if (currentVideo == -1) {
        currentVideo = videoList.length - 1
    }
}

function appendVideo(url) {
    videoContainer.innerHTML = `
    <iframe src="${url}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    `
}

right.addEventListener('click', () => {
    getRange()
    console.log(currentVideo)
    appendVideo(videoList[currentVideo])
    currentVideo += 1
})

left.addEventListener('click', () => {
    getRange()
    console.log(currentVideo)
    appendVideo(videoList[currentVideo])
    currentVideo -= 1
})

// Open Modal
const videoModal = document.querySelector('.modal')
const playBtn = document.querySelector('.play-btn')
const modalOverlay = document.querySelector('.modal-overlay')

playBtn.addEventListener('click', () => {
    videoModal.classList.remove('close')
    document.querySelector('html').style.overflow = 'hidden'
})

modalOverlay.addEventListener('click', () => {
    videoModal.classList.add('close')
    document.querySelector('html').style.overflow = 'auto'
})

const hamburger = document.querySelector('.hamburger')
const mobileNavbar = document.querySelector('.mobile-navbar')
const html = document.querySelector('html')

const opening = document.querySelector('.opening')

document.addEventListener('DOMContentLoaded', () => {
  opening.classList.add('opening')
})

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1
})

hamburger.addEventListener('click', () => {
  console.log('clicked')
  mobileNavbar.classList.toggle('show')
  hamburger.classList.toggle('click')
  html.classList.toggle('modal')
})

window.onload = () => {
  setTimeout(() => {
    opening.classList.add('closing')
  }, 1000)
}








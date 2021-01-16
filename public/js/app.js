const hamburger = document.querySelector('.hamburger')
const mobileNavbar = document.querySelector('.mobile-navbar')
const html = document.querySelector('html')

const opening = document.querySelector('.opening')


document.addEventListener('DOMContentLoaded', () => {
  opening.classList.add('opening')
})

window.onload = () => {
  setTimeout(() => {
    opening.classList.add('closing')

  }, 1000)
}

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1
})

// $(".slider")[0].slick.setPosition();



hamburger.addEventListener('click', () => {

  mobileNavbar.classList.toggle('show')
  hamburger.classList.toggle('click')
  html.classList.toggle('modal')

})






const hamburger = document.querySelector('.hamburger')
const mobileNavbar = document.querySelector('.mobile-navbar')
const html = document.querySelector('html')

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






const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar1')
const html = document.querySelector('html')

// $('.slider').slick({
//   autoplay: true,
//   autoplaySpeed: 5000,
//   slidesToShow: 1
// })

// $(".slider")[0].slick.setPosition();



hamburger.addEventListener('click', () => {
 
  sidebar.classList.toggle('show')
  hamburger.classList.toggle('click')
  html.classList.toggle('modal')
  console.log(hamburger)

})






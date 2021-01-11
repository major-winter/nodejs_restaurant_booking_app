const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar1')
const html = document.querySelector('html')



hamburger.addEventListener('click', () => {
  // hamburger.style.display = 'none'
  // cross.style.display = 'block'
  sidebar.classList.toggle('show')
  hamburger.classList.toggle('click')
  html.classList.toggle('modal')
  console.log(hamburger)

})






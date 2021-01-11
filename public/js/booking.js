const form = document.querySelector('form')
const userName = document.querySelector('input[name=name]').value
const email = document.querySelector('input[name=email]').value
const phoneNumber = document.querySelector('input[name=number]').value
const date = document.querySelector('input[name=date]')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const userName = document.querySelector('input[name=name]').value
  const email = document.querySelector('input[name=email]').value
  const phoneNumber = document.querySelector('input[name=number]').value
  const date = document.querySelector('input[name=date]').value
  const numberOfAdults = document.querySelector('input[name=numberOfAdults]').value
  const numberOfChildren = document.querySelector('input[name=numberOfChildren]').value

  fetch(`/booking?name=${userName}&email=${email}&phone_number=${phoneNumber}&date=${date}&num_of_adults=${numberOfAdults}&num_of_children=${numberOfChildren}`, {
    method: 'post'
  })
    .then(() => {
      form.reset()
      window.location.href = '/booked'
    })
    .catch(err => {
      console.log(err)
    })

})
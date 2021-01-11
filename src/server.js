const express = require('express')
const fs = require('fs')
const hbs = require('hbs')
const path = require('path')

const app = express()
app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

app.set('views', viewPath)

app.use(express.static(publicDir))
app.use(express.json())


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/about', (req, res) => { res.render('about') })

app.get('/menu', (req, res) => {
  res.render('menu')
})

// Create a booking table
let bookingInfo = {}
app.post('/booking', (req, res) => {
  bookingInfo = req.query

  res.redirect('/booked')
})

app.get('/booking', (req, res) => {
  res.render('book')
})

app.get('/booked', (req, res) => {
  const { name, email, phone_number: phone, date } = bookingInfo
  res.render('booked', {
    name,
    email,
    phone,
    date
  })
})

app.get('*', (req, res) => {
  res.send('Page not found')
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is online on port ${port}`)
})
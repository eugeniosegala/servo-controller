const express = require('express')
const app = express()
const Gpio = require('pigpio').Gpio;

const port = 3000
const motor = new Gpio(10, {mode: Gpio.OUTPUT});

app.use('/', express.static('static'))

app.get('/left', (req, res) => {
  motor.servoWrite(2500);
  res.send('Turning Left!')
})

app.get('/right', (req, res) => {
  motor.servoWrite(500);
  res.send('Turning Right!')
})

app.get('/top', (req, res) => {
  motor.servoWrite(1500);
  res.send('Turning Top!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

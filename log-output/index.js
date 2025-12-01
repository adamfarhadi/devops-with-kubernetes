const express = require('express')
const app = express()
const port = process.env.PORT
const crypto = require("crypto");

var currentStatus = ""

const printString = () => {
  currentStatus = new Date() + ': ' + crypto.randomUUID()
  console.log(currentStatus);

  setTimeout(printString, 5000)
};

printString()

app.get('/status', (req, res) => {
  res.send('<p>Current status: ' + currentStatus + '</p>')
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
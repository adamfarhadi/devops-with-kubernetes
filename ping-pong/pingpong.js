const pingpongRouter = require('express').Router()
const fs = require('fs')
const path = require('path')

var counter = 0
const file_path = path.join('/usr/src/app/files/pingpong.txt')

const writeCounter = () => {
  counterAsString = counter.toString()
  fs.writeFile(file_path, counterAsString, (error) => {
      if (error) {
        console.error('Error writing to file: ', error)
      }
      else {
        console.log('Wrote: ', counterAsString.trim())
      }
    })
}

pingpongRouter.get('/ping', (req, res) => {
  res.send(`pong ${++counter}`)
  writeCounter()
})

module.exports = pingpongRouter
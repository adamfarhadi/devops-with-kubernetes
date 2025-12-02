const fs = require('fs')
const path = require('path')
const crypto = require("crypto");

const file_path = path.join('/usr/src/app/files/log.txt')

const writeLine = () => {
  line = new Date() + ': ' + crypto.randomUUID() + '\n'

  fs.writeFile(file_path, line, (error) => {
    if (error) {
      console.error('Error writing to file: ', error)
    }
    else {
      console.log('Wrote: ', line.trim())
    }
  })
}

writeLine()

setInterval(writeLine, 5000)
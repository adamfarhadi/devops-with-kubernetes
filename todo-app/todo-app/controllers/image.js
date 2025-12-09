const imageRouter = require('express').Router()
const axios = require('axios')
const fs = require('fs')
const config = require('../utils/config')

const interval = 10 * 60 * 1000

const getAndWriteImage = async () => {
  try {
    console.log(`[${new Date().toISOString()}] Fetching new image from picsum`)

    const response = await axios.get(config.IMAGE_URL, { responseType: 'stream' })

    const writer = fs.createWriteStream(config.IMAGE_FILE_PATH)
    response.data.pipe(writer)

    writer.on('finish', () => {
      console.log(
        `[${new Date().toISOString()}] Image has been written to ${config.IMAGE_FILE_PATH}`
      )
    })

    writer.on('error', (error) => {
      console.error(error)
    })
  } catch (error) {
    console.error(error)
  }
}

getAndWriteImage()

setInterval(getAndWriteImage, interval)

imageRouter.get('/', (req, res) => {
  res.sendFile(config.IMAGE_FILE_PATH)
})

module.exports = imageRouter

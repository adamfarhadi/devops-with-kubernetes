const imageRouter = require('express').Router()
const axios = require('axios')
const fs = require('fs')

const image_url = 'https://picsum.photos/400'

const image_file_path =
  process.env.NODE_ENV === 'production'
    ? '/usr/src/app/files/image.jpg'
    : '/tmp/image.jpg'

const interval = 10 * 60 * 1000

const getAndWriteImage = async () => {
  try {
    console.log(`[${new Date().toISOString()}] Fetching new image from picsum`)

    const response = await axios.get(image_url, { responseType: 'stream' })

    const writer = fs.createWriteStream(image_file_path)
    response.data.pipe(writer)

    writer.on('finish', () => {
      console.log(
        `[${new Date().toISOString()}] Image has been written to ${image_file_path}`
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
  res.sendFile(image_file_path)
})

module.exports = imageRouter

const axios = require('axios')
const fs = require('fs')

const image_url = 'https://picsum.photos/400'
const image_file_path = '/usr/src/app/files/image.jpg'
const interval = 10 * 60 * 1000

const getImage = async () => {
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

getImage()

setInterval(getImage, interval)

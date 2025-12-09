require('dotenv').config()

const PORT = process.env.PORT
const IMAGE_URL = process.env.IMAGE_URL
const IMAGE_FILE_PATH = process.env.IMAGE_FILE_PATH

module.exports = { PORT, IMAGE_URL, IMAGE_FILE_PATH }
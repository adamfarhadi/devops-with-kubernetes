const todoRouter = require('express').Router()

const image_file_path = '/usr/src/app/files/image.jpg'

todoRouter.get('/image.jpg', (req, res) => {
  res.sendFile(image_file_path)
})

module.exports = todoRouter
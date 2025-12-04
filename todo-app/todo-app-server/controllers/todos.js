const todoRouter = require('express').Router()

const image_file_path =
  process.env.NODE_ENV === 'production'
    ? '/usr/src/app/files/image.jpg'
    : '/tmp/image.jpg'

let todos = [
  {
    id: '1',
    content: 'Learn JavaScript',
  },
  {
    id: '2',
    content: 'Learn React',
  },
  {
    id: '3',
    content: 'Build a project',
  },
]

todoRouter.get('/image.jpg', (req, res) => {
  res.sendFile(image_file_path)
})

todoRouter.get('/', async (req, res) => {
  res.json(todos)
})

module.exports = todoRouter

const todoRouter = require('express').Router()

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

todoRouter.get('/', async (req, res) => {
  res.json(todos)
})

module.exports = todoRouter

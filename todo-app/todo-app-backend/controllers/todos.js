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

const generateId = () => {
  const maxId =
    todos.length > 0 ? Math.max(...todos.map((n) => Number(n.id))) : 0
  return String(maxId + 1)
}

todoRouter.get('/', async (req, res) => {
  res.json(todos)
})

todoRouter.post('/', async (req, res) => {
  body = req.body

  console.log('body: ', body)

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing',
    })
  }

  const todo = {
    id: generateId(),
    content: body.content
  }

  todos = todos.concat(todo)

  res.json(todo)
})

module.exports = todoRouter

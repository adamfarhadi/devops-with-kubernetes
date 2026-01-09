const todoRouter = require('express').Router()
const Todo = require('../models/todo')

todoRouter.get('/', async (req, res) => {
  const todos = await Todo.findAll({
    order: [['id', 'ASC']],
  })
  res.json(todos)
})

todoRouter.post('/', async (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'content is required' })
  }

  if (req.body.content.length > 140) {
    return res
      .status(400)
      .json({ error: 'todo content cannot exceed 140 characters in length' })
  }

  const todo = await Todo.create({
    content: req.body.content,
    done: req.body.done,
  })
  return res.json(todo)
})

todoRouter.put('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id)

  if (!todo)
    return res
      .status(404)
      .json({ error: `todo with id ${req.params.id} not found` })

  if (!req.body.content) {
    return res.status(400).json({ error: 'content is required' })
  }

  if (req.body.content.length > 140) {
    return res
      .status(400)
      .json({ error: 'todo content cannot exceed 140 characters in length' })
  }

  todo.set({ content: req.body.content, done: req.body.done ?? todo.done })
  await todo.save()

  return res.json(todo)
})

module.exports = todoRouter

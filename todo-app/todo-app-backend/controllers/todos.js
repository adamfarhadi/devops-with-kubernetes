const todoRouter = require('express').Router()
const Todo = require('../models/todo')

todoRouter.get('/', async (req, res) => {
  const todos = await Todo.findAll()
  res.json(todos)
})

todoRouter.post('/', async (req, res) => {
  if (req.body.content.length > 140) {
    return res
      .status(400)
      .json({ error: 'todo content cannot exceed 140 characters in length' })
  }

  const todo = await Todo.create(req.body)
  return res.json(todo)
})

module.exports = todoRouter

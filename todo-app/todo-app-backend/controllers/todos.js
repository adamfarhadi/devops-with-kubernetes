const todoRouter = require('express').Router()
const Todo = require('../models/todo')

todoRouter.get('/', async (req, res) => {
  const todos = await Todo.findAll()
  res.json(todos)
})

todoRouter.post('/', async (req, res) => {
  const todo = await Todo.create(req.body)
  return res.json(todo)
})

module.exports = todoRouter

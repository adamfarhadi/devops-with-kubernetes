import { useEffect, useState } from 'react'
import todoService from './services/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    todoService.getAll().then((todos) => setTodos(todos))
  }, [])

  const addTodo = async (event) => {
    event.preventDefault()
    const newTodoToAdd = { content: newTodo }

    try {
      const returnedTodo = await todoService.create(newTodoToAdd)
      setTodos(todos.concat(returnedTodo))
      console.log(`successfully added todo ${newTodoToAdd.content}`)
      setNewTodo('')
    } catch {
      console.error(`error adding todo ${newTodoToAdd.content}`)
    }
  }

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  const toggleDone = async (todoObject) => {
    try {
      const todoToUpdate = { ...todoObject, done: !todoObject.done }
      const updatedTodo = await todoService.update(todoToUpdate.id, todoToUpdate)
      setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)))
    } catch (error) {
      console.error(`error marking todo ${todoObject} with id ${todoObject.id} as done: ${error}`)
    }
  }

  return (
    <div>
      <h1>The Project App</h1>
      <img src="/image" alt="random image from server" />
      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={handleTodoChange} maxLength="140" />
        <button type="submit">Create todo</button>
      </form>
      <h2>Todo</h2>
      <ul>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <li key={todo.id}>
              {todo.content + ' '}
              <button onClick={() => toggleDone(todo)}>Mark as done</button>
            </li>
          ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => (
            <li key={todo.id}>
              {todo.content + ' '}
              <button onClick={() => toggleDone(todo)}>Mark as todo</button>
            </li>
          ))}
      </ul>
      <p>DevOps with Kubernetes 2025</p>
    </div>
  )
}

export default App

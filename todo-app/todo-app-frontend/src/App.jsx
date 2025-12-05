import { useEffect, useState } from 'react'
import todoService from './services/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    todoService.getAll().then((todos) => setTodos(todos))
  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    console.log('addTodo')
  }

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  return (
    <div>
      <h1>The Project App</h1>
      <img src="/image" alt="random image from server" />
      <form onSubmit={addTodo}>
        <input
          value={newTodo}
          onChange={handleTodoChange} 
          maxLength="140"
        />
        <button type='submit'>Create todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <p>DevOps with Kubernetes 2025</p>
    </div>
  )
}

export default App

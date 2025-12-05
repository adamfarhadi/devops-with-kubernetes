import axios from 'axios'

const baseUrl = '/api/todos'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newTodo) => {
  const request = axios.post(baseUrl, newTodo)
  return request.then(response => response.data)}

export default { getAll, create }

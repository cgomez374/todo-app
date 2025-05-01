import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    "code",
    "workout",
    "eat"
  ])

  // ADD NEW TODO
  function addNewTodo(newTodo){
    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ])
  }
  return (
    <main>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos}/>
    </main>
  )
}

export default App

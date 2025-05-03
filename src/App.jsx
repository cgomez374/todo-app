import { use, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "code",
      completedStatus: false
    },
    {
      id: 2,
      todo: "workout",
      completedStatus: false
    },
    {
      id: 3,
      todo: "eat",
      completedStatus: false
    }
  ])
  // ADD NEW TODO
  function addNewTodo(newTodo){
    const newTodoItem = {
      id: todos.length + 1,
      todo: newTodo,
      completedStatus: false
    }
    setTodos(prevTodos => [
      ...prevTodos,
      newTodoItem
    ])
  }

  // Update Completed Status
  function updateCompletedStatus(id){
    setTodos(prevTodos => {
      return prevTodos.map(
        todo => todo.id === id 
          ? {...todo, completedStatus: !todo.completedStatus} 
          : todo
        )
    })
  }

  // Delete Todo Item
  function deleteTodoItem(id){
    setTodos(prevTodos => {
      return prevTodos.filter(
        todo => todo.id !== id 
        )
    })
  }

  return (
    <main>
      <h1>Stuff To-do</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} 
        updateCompletedStatus={updateCompletedStatus}
        deleteTodoItem={deleteTodoItem}
      />
    </main>
  )
}

export default App

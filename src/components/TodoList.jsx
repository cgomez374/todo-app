import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ todos, updateCompletedStatus, deleteTodoItem }){
  const [filteredTodos, setFilteredTodos] = useState([...todos])
  const [selectedFilter, setSelectedFilter] = useState("all")

  function filterTodos(event){
    const filter = event.target.value
    setSelectedFilter(filter)
    if (filter === "all") setFilteredTodos([...todos])
    else if (filter === "active") setFilteredTodos([...todos.filter(item => item.completedStatus === false)])
    else if (filter === "completed") setFilteredTodos([...todos.filter(item => item.completedStatus === true)])
  }
  
  return (
    <ul className="todo-list-container">
      <select name="filter-todos" value={selectedFilter} onChange={filterTodos}>
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="completed">completed</option>
      </select>
      {
        todos.map(item => ( 
            <TodoItem 
              key={item.id}
              item={item} 
              updateCompletedStatus={updateCompletedStatus}
              deleteTodoItem={deleteTodoItem}
            />
          ))
      }
      {/* {
        selectedFilter === "all" && todos.map(item => ( 
          <TodoItem 
            key={item.id}
            item={item} 
            updateCompletedStatus={updateCompletedStatus}
            deleteTodoItem={deleteTodoItem}
          />
        ))
      } */}
      {/* {
        selectedFilter === "active" && todos.map(item => ( 
          item.completedStatus === false && <TodoItem 
            key={item.id}
            item={item} 
            updateCompletedStatus={updateCompletedStatus}
            deleteTodoItem={deleteTodoItem}
          />
        ))
      }
      {
        selectedFilter === "completed" && todos.map(item => ( 
          item.completedStatus === true && <TodoItem 
            key={item.id}
            item={item} 
            updateCompletedStatus={updateCompletedStatus}
            deleteTodoItem={deleteTodoItem}
          />
        ))
      } */}
    </ul>
  )
}
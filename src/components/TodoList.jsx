import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList({ todos, updateCompletedStatus, deleteTodoItem }){
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredTodos = todos.filter(todo => {
    if (selectedFilter === "active") return !todo.completedStatus 
    if (selectedFilter === "completed") return todo.completedStatus
    return true
  })

  
  return (
    <ul className="todo-list-container">
      <select name="filter-todos" value={selectedFilter} 
        onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="completed">completed</option>
      </select>
      {
        filteredTodos.map(item => ( 
            <TodoItem 
              key={item.id}
              item={item} 
              updateCompletedStatus={updateCompletedStatus}
              deleteTodoItem={deleteTodoItem}
            />
          ))
      }
    </ul>
  )
}
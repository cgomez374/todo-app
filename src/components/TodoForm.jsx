import { useState } from "react"

export default function TodoForm({ addNewTodo }){
  const [name, setName] = useState("")

  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    !name ? alert("input empty") : addNewTodo(name)
    setName("")
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter new to-do "
      />
      <button type="submit">submit</button>
    </form>
  )
}
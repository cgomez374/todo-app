import { useState } from "react"

export default function TodoForm({ addNewTodo }){
  const [name, setName] = useState("")

  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    addNewTodo(name)
    setName("")
  }


  return (
    <div className="">
      <h2>todo form</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter new to-do "
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default function TodoList({ todos }){
  return (
    <>
      <h1>TODO LIST</h1>
      <ul>
        {
          todos.map(item => ( 
            <li>{item}</li>
          ))
        }
      </ul>
    </>
  )
}
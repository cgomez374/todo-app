export default function TodoItem({item, updateCompletedStatus, deleteTodoItem}){
  return (
    <li className="todo-list-item-container">
      <div className="">
        {/* <label htmlFor="completed-todo">Completed:</label> */}
        <input 
          type="checkbox" 
          name="completed-todo" 
          checked={item.completedStatus ? true : false}
          onChange={() => updateCompletedStatus(item.id)}  
        />
      </div>
      <p>{item.todo}</p>
      <div className="todo-list-item-button-container">
        <button onClick={() => deleteTodoItem(item.id)}>delete</button>
      </div>
    </li>
  )
}
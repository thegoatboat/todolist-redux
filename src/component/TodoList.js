import React from 'react'
import Element from './Element'
import { useSelector } from 'react-redux'

const  TodoList= () => {
  const todos=useSelector(state=>state.todos)
    console.log(todos)
  return (
    <div>
      
        <ul>
        
       <li> {todos.map((el)=> ( <Element todo={el}  /> ))}</li>
      
        </ul>
        
      
    
    </div>
  )
}

export default TodoList

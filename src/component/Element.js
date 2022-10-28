import React from 'react'
import { useDispatch } from 'react-redux'
import { delet , togeel } from '../redux/TodoSlice'
const Element =({todo})=> {
const dispatch=useDispatch()
  const handelremove=(id)=>{
    dispatch(delet(id))
  }
  const handelTogeel=(id)=>{
    dispatch(togeel(id))
  }
  return (
    <div style={{display:'flex'}}>
    <h1 style={todo.isDone?{backgroundColor:'red',color:'white'}:{}}>{todo.text}</h1>
    <button onClick={()=>handelremove(todo.id)}>Remove</button>
    <button onClick={()=>handelTogeel(todo.id)}>{todo.isDone ? 'Yup you did it ':"Done"}</button>
    </div>
  )
}

export default Element

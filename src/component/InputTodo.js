import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { add } from '../redux/TodoSlice';

export const InputTodo=() => {
  const dispatch = useDispatch();

  const [input,setInput]=useState("")
  
  
  
  const handelAdd=()=>{
    dispatch(add(input))
  }
  return (
    <div>
      <input type='text' placeholder='insert your todo element' onChange={(el)=>setInput(el.target.value)}/>
      <button onClick={handelAdd} >ADD</button>
    </div>
  )
}

export default InputTodo

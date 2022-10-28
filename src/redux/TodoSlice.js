import {createSlice} from '@reduxjs/toolkit';
import uuid4 from 'uuid4';

const TodoSlice = createSlice ({

    name:"todos",
    initialState: [
        { id:uuid4() , text:'todo1',completed:false},
        { id:uuid4 (), text:'todo2',completed:false},
        { id:uuid4() , text:'todo3',completed:true},
        { id:uuid4 (), text:'todo4',completed:false},

    ],
    reducers:{
        add:(state,action)=>{
            const newTodo={
                id:uuid4(),
                text:action.payload,
                isDone:false
            };
            state.push(newTodo)
        },
        delet:(state,action)=>{
            return state.filter((el)=>el.id !== action.payload) 
        }     
        ,
        togeel:(state,action)=>{
           return state.map((el)=>el.id === action.payload? {...el,isDone:!el.isDone}:el)
        }
        
    }
})

export const {add,delet,togeel} = TodoSlice.actions;

export default TodoSlice.reducer;
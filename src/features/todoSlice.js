import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[]
}

export const todoSlice = createSlice({
  name:'Mtodos',
  initialState,
  reducers:{
    addTodo: (state , action)=>{
      const todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false 
      }
      state.todos.push(todo)
    },
    deleteTodo: (state , action)=>{
      state.todos = state.todos.filter((todo)=>
        todo.id!==action.payload)
    },
    updateTodo: (state , action)=>{
      state.todos = state.todos.map((todo)=>todo.id === action.payload.id ? {...todo,todo:action.payload.editTodoMsg} : todo) 
    },
    toggleComplete: (state , action)=>{
      state.todos = state.todos.map((todo)=>todo.id === action.payload ? {...todo,completed:!(todo.completed)}  : todo)
    }
  }
})

export const {addTodo , updateTodo , deleteTodo , toggleComplete} = todoSlice.actions

export default todoSlice.reducer;
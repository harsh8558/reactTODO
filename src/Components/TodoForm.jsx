import { useState } from "react";
import useList, { ListContext } from "../Context/listContext";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todoSlice";
const TodoForm = ()=>{
  const[todo , setTodo] = useState("")
 // const {addTodo} = useList(ListContext)
  const dispatch = useDispatch()
  function add(e){
    e.preventDefault()
    if(!todo) return
    let count=0
    if(todo.length>10){
      for(let i=0; i<10; i++ ){
        if(todo[i]===" ") count++;
      }
      if(count===0)return
    }
    dispatch(addTodo(todo))

    
    //addTodo({todo , completed:false})
    setTodo("")
  }
  return(<>
    <form onSubmit={add} className="flex">
      <input 
        type="text"
        value={todo}
        placeholder="Write Todo..."
        className="w-full relative rounded-l-full md:p-4 p-2 text-xl dark:bg-slate-500 dark:text-white "
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button 
        className="bg-blue-700 md:py-4 py-2 md:px-12 px-6 border-none border-2 rounded-r-full font-bold dark:bg-green-400 text-white">Add
      </button>
    </form>
  </>)
}
export default TodoForm;
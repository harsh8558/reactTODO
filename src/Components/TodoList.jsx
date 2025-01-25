import { useState } from "react";
import useList, { ListContext } from "../Context/listContext";
import { FcPackage } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import { useDispatch , useSelector } from "react-redux";
import { updateTodo , deleteTodo , toggleComplete } from "../features/todoSlice";
const TodoList = ({curr})=>{
  const dispatch = useDispatch()
  //const {updateTodo,deleteTodo,toggleComplete}= useList(ListContext);
  const[isEditClicked , setIsEditClicked] = useState(false)
  const[editTodoMsg , setEditTodoMsg] = useState(curr.todo)
  function handleEditClick(id,todo){
    console.log(editTodoMsg)
    dispatch(updateTodo({id , editTodoMsg}))
    //updateTodo(id,editTodoMsg)

    setIsEditClicked((pre)=>!pre)
   }
  function handleDeleteClick(id){
    dispatch(deleteTodo(curr.id))
    //deleteTodo(id)
  }
  function handleTickChanged(){
    //console.log(curr.id)
    dispatch(toggleComplete(curr.id))
    //toggleComplete(curr.id)
  }
  return(<>
          <input 
            type="checkbox"
            checked={curr.completed}
            onChange={handleTickChanged}
            />
            {isEditClicked ? <input 
            type="text" 
            value={editTodoMsg}
            onChange={(e)=>setEditTodoMsg(e.target.value)}
            className={`absolute border-2 z-10 md:w-3/4 w-1/2 rounded-md p-2 dark:bg-slate-400 dark:text-white bg-white $`}
            /> : curr.todo}
        
          <div className="w-full flex gap-4 px-4 items-center md:text-4xl text-2xl justify-end">
            <FcPackage 
              onClick={()=>handleEditClick(curr.id,curr.todo)} 
              className={`cursor-pointer  md:w-12 md:h-12 md:p-2 w-6 h-6 rounded-md shadow-sm ${isEditClicked?'bg-green-400':' dark:bg-white bg-gray-600'} `} />
            <FcEmptyTrash 
              onClick={()=>handleDeleteClick(curr.id)} 
              className="cursor-pointer dark:bg-white bg-gray-600 md:w-12 md:h-12 md:p-2 w-6 h-6 rounded-md shadow-sm"/>
          </div>
  </>)
}
export default TodoList;

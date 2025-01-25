import ToggleBtn from "./ToggleBtn";
import { ThemeProvider } from "../Context/theme";
import { useState } from "react";
import { useEffect } from "react";
import TodoList from "./TodoList";
import { ListContextProvider } from "../Context/listContext";
import { useSelector , useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
const Todo = ()=>{
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  const[themeMode , setThemeMode] = useState("dark");
  
  //const[todos , setTodos] = useState([]);
  // const addTodo=(todo)=>{
  //   setTodos((pre)=>[...pre,{id: Date.now() , ...todo}])
  // }
  // const updateTodo=(id,editTodoMsg)=>{
  //   setTodos((pre)=>(pre.map((curr)=>(curr.id===id ? {...curr,todo:editTodoMsg}:curr))))
  // }
  // const deleteTodo=(id)=>{
  //   setTodos((pre)=>(pre.filter((todos)=>todos.id!==id)))
  // }
  // const toggleComplete=(id)=>{
  //   setTodos((prev)=>(prev.map((curr)=>(curr.id===id ? {...curr,completed:!(curr.completed)} : curr))))
  // }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);

    
  },[themeMode])
  // useEffect(()=>{
  //   const todos = JSON.parse(localStorage.getItem('todo'))
  //   if(todos && todos.length > 0){
  //     //setTodos(todos)
  //   }
  // },[])
  // useEffect(()=>{
  //   localStorage.setItem('todo' , JSON.stringify(todos))
  // },[todos])



  return(<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
  {/* <ListContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}> */}
    <div className="absolute min-h-screen dark:bg-gradient-to-t dark:from-gray-500 dark:to-slate-100 bg-gray-800 ">
      <div className="flex flex-col items-center">
        <div className="flex w-screen justify-end md:mt-6 mt-4 md:px-32 px-4">
          <ToggleBtn/>
        </div>
        <header className="md:pb-14  pb-2 md:w-1/2">
          <h1 className="flex justify-center m-10 md:text-4xl text-2xl text-white font-bold dark:text-black">Manage Your Todos</h1>
          <TodoForm/>
        </header>
        <div className="px-10 md:w-1/2 w-full">
          <ul>
            {todos.map((curr)=>(
              <li 
              key={curr.id}
              className={`relative w-full flex items-center gap-4 rounded-full p-4 text-2xl  dark:text-white  mt-5 ${curr.completed?'dark:bg-green-700 bg-green-700 line-through' : 'dark:bg-gray-700 bg-white'}` }>
                <TodoList curr={curr}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="text-l md:text-2xl p-2 relative font-extralight dark:text-slate-600 text-gray-500">
              @harsh
    </div>
  {/* </ListContextProvider> */}
  </ThemeProvider>)
}
export default Todo;
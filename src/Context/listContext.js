import { useContext } from "react";
import { createContext } from "react";

export const ListContext = createContext({
  todos:[
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    }
  ],
  addTodo: (todo)=>{},
  updateTodo: (id,todo)=>{},
  deleteTodo: (id)=>{},
  toggleComplete: (id)=>{},
});

export const ListContextProvider = ListContext.Provider;

export default function useList(){
  return useContext(ListContext)
}
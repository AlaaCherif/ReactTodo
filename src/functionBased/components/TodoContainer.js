import React , {useState,useEffect} from "react"
import TodosList from "./TodosList"
import InputTodo from "./InputTodo"
import Header from "./Header"
import {v4 as uuidv4} from "uuid"
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NoMatch"
import Navbar from "./Navbar"

const TodoContainer=()=>{
       const [todos,setTodos]=useState(getInitialTodos())
       // useEffect(()=>{
       //        console.log("test run")
       //        const temp=localStorage.getItem("todos");
       //        const loadedTodos=JSON.parse(temp)
       //        if (loadedTodos)
       //        {
       //               setTodos(loadedTodos)
       //        }

       // },[])
       function getInitialTodos()
       {
              const temp=localStorage.getItem("todos");
              const savedTodos=JSON.parse(temp)
              return savedTodos || []
       }
       useEffect(()=>{      
              const temp =JSON.stringify(todos)
              localStorage.setItem("todos",temp)
       },[todos])
       
       const setUpdate=(updateTitle,id)=>{
              setTodos(
                     todos.map(todo=>{
                            if(todo.id===id)
                            {
                                   todo.title=updateTitle;
                            }
                            return todo
                     })
              )
       }
       const addTodoItem=title=>{
              const newTodo={
                     id:uuidv4(),
                     title:title,
                     compoleted:false
              };
              setTodos([...todos,newTodo])
       }
        const deleTodo = id => {
              setTodos([
                     ...todos.filter(todo=>{
                            return todo.id!==id
                     })
              ])
            };
       const handleChange=id=>{
              setTodos(prevState=>prevState.map(todo=>
                     {
                            if(todo.id===id)
                            {
                                   return {
                                          ...todo,completed:!todo.completed,
                                   }
                            }
                            return todo  
                     }))
       };                                      
              return(<>
                     <Navbar/>
                     <Switch>
                     <Route exact path="/">
                     <div className="container">
                     <div className="inner">
                     <Header/>
                     <InputTodo addTodoProps={addTodoItem}/>
                     <TodosList todos={todos} handleChangeProps={handleChange} deleteTodoProps={deleTodo}
                     setUpdate={setUpdate}/>
                     </div>
                     </div>
                     </Route>
                     <Route path="/about"><About/></Route>
                     <Route path="*"><NotMatch/></Route>
                     </Switch>
                     </>

              );
       
}

export default TodoContainer
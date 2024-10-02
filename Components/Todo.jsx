import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitem from './Todoitem'
const Todo = () => {
    const [todo,setTodo] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): []);
    const inputRef = useRef();
    const add = () =>{

        const inputText= inputRef.current.value.trim();

        if(inputText===""){
            return null;
        }

        const newTodo = {
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }

        setTodo((prev)=>[...prev,newTodo]);
        inputRef.current.value = "";
        console.log(inputText);
    }

    const deleteTodo = (id) =>{
        setTodo((prev) =>{
            return prev.filter((todo)=>todo.id !==id)
        })
    }

    const toggle = (id)=>{
        setTodo((prevtodos)=>{
            return prevtodos.map((todo)=>{
                if(todo.id === id){
                    return {...todo,isComplete: !todo.isComplete}
                }
                return todo;
            })
        })

    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todo))
        console.log(todo);
    },[todo]);
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col min-h-[550px] rounded-xl p-3'>
     <div className='items-center flex mt-10 gap-2'>
        <img className='w-8 mx-5 justify-between' src={todo_icon}/>
        <h1 className='text-3xl font-semibold '>Todo List</h1>
     </div>
     <div className='mt-7 flex items-center bg-gray-200 rounded-full my-7 '>
        <input  ref={inputRef} className='bg-transparent bottom-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" />
        <button onClick={add} className='border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add+</button>
     </div>
     <div className='mx-2'>
        {todo.map((item,index)=>{
            return <Todoitem  key={index} id={item.id} text={item.text} isComplete={item.isComplete} 
            deleteTodo={deleteTodo} toggle={toggle}/>
        })}      
     </div>
    </div>
  )
}

export default Todo

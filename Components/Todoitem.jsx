import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'
const Todoitem = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-4 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick}  className='w-7'/>
        <p className={`text-slate-700 font-semibold ml-4 text-[18px]
         ${isComplete?"line-through": ""}`}>{text}</p>
      </div>
      <img src={delete_icon}  className='w-3.5 cursor-pointer' onClick={()=>{deleteTodo(id)}}/>
    </div>
  )
}

export default Todoitem

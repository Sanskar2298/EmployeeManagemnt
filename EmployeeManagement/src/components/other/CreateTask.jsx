import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'
const CreateTask = () => {

  const[userData,setUserData] = useContext(AuthContext)

const [taskTitle,setTaskTitle] = useState('')
const [taskDate,setTaskDate] = useState('')
const[taskDescription,setTaskDescription]= useState('')
const[assignTo,setAssignTo]=useState('')
const[category,setCategory]= useState('')

const[newtask,setNewTask] = useState({})
const submitHandler = (e) => {
e.preventDefault()

setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})





const data = userData



data.forEach(function(elem){
if(assignTo==elem.firstName){
elem.tasks.push(newTask)
elem.taskStats.newTask=elem.taskStats.newTask +1  
}

})
setUserData(data)




localStorage.setItem('employees',JSON.stringify(data))



setTaskDate("")
setAssignTo('')
setCategory('')
setTaskDescription('')
setTaskTitle('')



}






  return (
    <div>
      <div> 

<form onSubmit = {(e)=>{
submitHandler(e)
}
}

className = 'flex items-start justify-between w-full flex-wrap'>
    <div className='w-1/2'>
        <div>
<h3 className = 'text-sm text-gray-300 mb-0.5'> Task Title </h3>
<input
value = {taskTitle}
onChange = {(e)=>{
  setTaskTitle(e.target.value)
}}
 className= 'text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
type="text" placeholder = "Make a UI Design"></input>

<div >
<h3 className = 'text-sm text-gray-300 mb-0.5'>Date </h3>
<input
value = {taskDate}
onChange = {(e)=>{
  setTaskDate(e.target.value)
}}





className= 'text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type = "date"/>
</div>

<div>
<h3 className = 'text-sm text-gray-300 mb-0.5'> Assign To </h3>
<input
value = {assignTo}
onChange = {(e)=>{
  setAssignTo(e.target.value)
}}



className= 'text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type = "text" placeholder = 'Employee Name'/>
</div>

<div>
<h3 className = 'text-sm text-gray-300 mb-0.5' >Category</h3>

<input
value = {category}
onChange = {(e)=>{
  setCategory(e.target.value)
}}





className= 'text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type = "text" placeholder = 'design,dev,etc'/>
</div>

    </div>
    
</div>

<div className='w-2/5 flex flex-col items-start'>
<h3 className='text-sm text-gray-300 mb-0.5'> Description </h3>
<textarea
value = {taskDescription}
onChange = {(e)=>{
  setTaskDescription(e.target.value)
}}




className = 'w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1]px] border-gray-400 '
name="" id= "" cols="30"rows="10"></textarea>
</div>



<button className = 'bg-emerald-500 py-3 hover;bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task </button>

</form>

</div>

    </div>
  )
}

export default CreateTask

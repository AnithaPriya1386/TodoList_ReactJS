import React,{useState} from 'react';



function TodoList(){
   
    const[tasks,setTasks]=useState([]);//storing purpose
    const[newTask,setNewTask]=useState("");//entered value

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t=>[...t,newTask]);//adding the previous task with new task
        setNewTask("");//to clear the task in input field
        }
    }
    function deleteTask(index){
       
        const updatedTasks = tasks.filter((element,i)=>i !==index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
       if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks)
       }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
           }
    }
    return (
        <div className='to-do-list'>
            <h1>Daily Task!!! Keep a note of it !!!</h1>
            <div>
                <input  type="text" placeholder='Enter the task...' value={newTask}
                onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>➕</button>
                {/* to get emoji - windowsKey+semicolon */}
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={()=>deleteTask(index)}>❌</button>
                    <button className='move-up-button' onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className='move-down-button' onClick={()=>moveTaskDown(index)}>👇</button>
                </li>
                )}
            </ol>
        </div>
    );
}


export default TodoList;
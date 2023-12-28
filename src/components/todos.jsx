/* eslint-disable react/prop-types */
import { useState } from "react";

function Todo({todoList}){

    const [todoArr,setTodoArr] = useState(todoList);

    function handleDelete(item,event){
        console.log(`deleted task ${item}`);
        event.target.parentElement.parentElement.style.backgroundColor = "black"
        event.target.parentElement.parentElement.style.color = "white"
    }

    function handleAddTaskClick(){
        // accessing the inut val 👇
        // console.log("your task is ",taskVal);
        // console.log("your date is ",dateVal);
        
        if(taskVal === "" || dateVal === "" ) return;
        // creating a new taskArr
        const newTask = {
            task: taskVal,
            date: dateVal
        }
        const newTodoArr = [...todoArr,newTask]
        setTodoArr(newTodoArr);
        // change the vals of input 
        setTaskVal('')
        setDateVal('')

    }

    // grabbing input tag values
    // task input
    const [taskVal,setTaskVal] = useState("");
    const [dateVal,setDateVal] = useState("");
    let content ;
    if(todoArr.length===0) content = <h1>No items found</h1>
    else content = todoArr.map((elem,i)=>(
        <div className="row mb-3" key={i}>
            <div className="col">
                {elem.task}
            </div>
            <div className="col">
                {elem.date}
            </div>
            <div className="col">
                <button type="button" className="btn btn-danger" onClick={(evnt)=>(handleDelete(elem.task,evnt))}>delete</button>
            </div>
        </div>
    ))


    return <div className="container">
        {/* to do adder row */}
        <div className="row mb-3 mt-3">
            <div className="col">
                <input type="text" value={taskVal} placeholder="Enter your task" onChange={(e)=>setTaskVal(e.target.value)} />
            </div>
            <div className="col">
                <input type="date" value={dateVal} onChange={(e)=>setDateVal(e.target.value)} />
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={handleAddTaskClick} >Add task</button>
            </div>
        </div>

        {/* todos */}           
        {content}
    </div>
}

export default Todo;
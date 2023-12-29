/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function Todo({todoList}){

    const [todoArr,setTodoArr] = useState(todoList);
    // grabbing input tag values
    // task input
    const [taskVal,setTaskVal] = useState("");
    const [dateVal,setDateVal] = useState("");



    function handleDelete(taskObj){
        const newArr = todoArr.filter((e)=>{return (e.task!==taskObj.task && e.date !== taskObj.date)});
        setTodoArr(newArr);
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
        // changing the array will cause a re render
        setTodoArr(newTodoArr);
        // change the vals of input 
        setTaskVal('')
        setDateVal('')

    }

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
                <button type="button" className="btn btn-danger" onClick={()=>(handleDelete({task:elem.task,date:elem.date}))}><FaTrash /></button>
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
                <button type="button" className="btn btn-primary" onClick={handleAddTaskClick} ><MdAddBox /></button>
            </div>
        </div>

        {/* todos */}           
        {content}
    </div>
}

export default Todo;



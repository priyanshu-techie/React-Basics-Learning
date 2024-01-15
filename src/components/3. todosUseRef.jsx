/* eslint-disable react/prop-types */
import { useState,useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function TodoUseRef({todoList}){

    const [todoArr,setTodoArr] = useState(todoList);
    // grabbing input tag values
    const taskVal = useRef()
    const dateVal = useRef()



    function handleDelete(taskObj){
        const newArr = todoArr.filter((e)=>{return (e.task!==taskObj.task && e.date !== taskObj.date)});
        setTodoArr(newArr);
    }

    function handleAddTaskClick(){

        const taskItem = taskVal.current.value;
        const dateItem = dateVal.current.value;

        taskVal.current.value="";
        dateVal.current.value="";
        
        if(taskItem === "" || dateItem === "" ) return;
        // creating a new taskArr
        const newTask = {
            task: taskItem,
            date: dateItem
        }
        const newTodoArr = [...todoArr,newTask]
        // changing the array will cause a re render
        setTodoArr(newTodoArr);


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
                <input type="text" placeholder="Enter your task" ref={taskVal} />
            </div>
            <div className="col">
                <input type="date" ref={dateVal}/>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={handleAddTaskClick} ><MdAddBox /></button>
            </div>
        </div>

        {/* todos */}           
        {content}
    </div>
}

export default TodoUseRef;



/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function TodoWithForm({todoList}){

    const [todoArr,setTodoArr] = useState(todoList);


    function handleDelete(taskObj){
        // remove the object and reset the state
        const newArr = todoArr.filter((e)=>{return (e.task!==taskObj.task && e.date !== taskObj.date)});
        setTodoArr(newArr);
    }

    function handleSubmit(event){
        event.preventDefault();
        // this is but again an imperitive way , we need declarative ways for react , so need improvement
        const task = event.target[0].value;
        const date = event.target[1].value;
        if(task==""||date=="") return;
        const taskObj = {task, date};
        const newArr = [...todoArr, taskObj];
        setTodoArr(newArr);
        event.target[0].value= "";
        event.target[1].value= "";
    }

    let content ;
    // if no task then render this component
    if(todoArr.length===0) content = <h1>No items found</h1>
    // else this component
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
        <form className="row mb-3 mt-3" onSubmit={handleSubmit}>
            <div className="col">
                <input type="text" name="task"  placeholder="Enter your task" />
            </div>
            <div className="col">
                <input type="date" name="taskDate"/>
            </div>
            <div className="col">
                <button type="submit" className="btn btn-primary"><MdAddBox /></button>
            </div>
        </form>

        {/* todos */}           
        {content}
    </div>
}

export default TodoWithForm;



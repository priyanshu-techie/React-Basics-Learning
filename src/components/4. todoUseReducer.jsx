/* eslint-disable react/prop-types */
import { useReducer, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function reducer(state,action){
    switch(action.type){
        case "addNewTask":{
            if(action.payload.task === "" || action.payload.date === "" ) return state;
            const newTask ={ task: action.payload.task, date:action.payload.date };
            return [...state,newTask];
        }
        case "deleteTask":{
            return state.filter((e)=>{return (e.task!==action.payload.task && e.date !== action.payload.date)});
        }
        default:
            return state;
    }
}


function Todo({todoList}){

    // reducer helped to remove the state management from the component;
    const [todoArr,dispatch] = useReducer(reducer,todoList);
    const taskVal = useRef();
    const dateVal = useRef();

    return <div className="container">
        {/* to do adder row */}
        <div className="row mb-3 mt-3">
            <div className="col">
                <input type="text" placeholder="Enter your task" ref={taskVal}/>
            </div>
            <div className="col">
                <input type="date" ref={dateVal}/>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary" onClick={()=>{
                    dispatch({
                        type:"addNewTask",
                        payload:{
                            task:taskVal.current.value,
                            date:dateVal.current.value
                        }
                    })
                    taskVal.current.value ="";
                    dateVal.current.value = "";
                }} ><MdAddBox /></button>
            </div>
        </div>

        {/* todos */}           
        {todoArr.length?todoArr.map((elem,i)=>(
        <div className="row mb-3" key={i}>
            <div className="col">
                {elem.task}
            </div>
            <div className="col">
                {elem.date}
            </div>
            <div className="col">
                <button type="button" className="btn btn-danger" onClick={()=>{
                    dispatch({
                        type:"deleteTask",
                        payload:{
                            task:elem.task,
                            date:elem.date
                        }
                    })
                }}><FaTrash /></button>
            </div>
        </div>
    )):<h1>No items found</h1>
        }
    </div>
}

export default Todo;

/* eslint-disable react/prop-types */
function Todo(props){
    return <div className="container">
        <div className="row mb-3 mt-3">
            <div className="col">
                <input type="text" name="todo" placeholder="Enter your task" />
            </div>
            <div className="col">
                <input type="date" name="date" />
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary">Add task</button>
            </div>
        </div>
        {props.todoList.map((e,i)=>(
            <div className="row mb-3" key={i}>
                <div className="col">
                    {e.task}
                </div>
                <div className="col">
                    {e.date}
                </div>
                <div className="col">
                    <button type="button" className="btn btn-danger">delete</button>
                </div>
            </div>
        ))}
    </div>
}

export default Todo;
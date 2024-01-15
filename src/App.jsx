import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/0. header'
// import Todo from "./components/1. todos";
// import TodoWithForm from "./components/2. todosForm";
// import TodoUseRef from "./components/3. todosUseRef";
import TodoUseReducer from './components/4. todoUseReducer'

export default function App(){
  // get the items from network call
  // const todoList = [
  //  {
  //     task:"eat tomato",
  //     date: "11-12-23"
  //   }
  // ]
  const todoList = [];

  return(
    <div className="container pt-4">
      <Header/>
      {/* <Todo todoList={todoList}/> */}
      {/* <TodoWithForm todoList={todoList}/> */}
      {/* <TodoUseRef todoList={todoList}/> */}
      <TodoUseReducer todoList={todoList} />
    </div>
  )
}
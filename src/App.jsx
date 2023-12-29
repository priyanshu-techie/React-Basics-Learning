import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/0. header'
// import Todo from "./components/todos"
// import TodoWithForm from "./components/todosForm";
import TodoUseRef from "./components/3. todosUseRef";

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
      <TodoUseRef todoList={todoList}/>
    </div>
  )
}
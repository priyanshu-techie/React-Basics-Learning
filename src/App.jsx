import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/header'
import Todo from "./components/todos"

export default function App(){
  // get the items from network call
  const todoList = [
    {
      task:"eat tomato",
      date: "11-12-23"
    },
    {
      task:"run daily",
      date: "Daily"
    },
    {
      task:"kill mosquitos",
      date: "daily"
    },
    {
      task:"start learning react",
      date: "11-11-23"
    }
    
  ]

  return(
    <div className="container pt-4">
      <Header/>
      <Todo todoList={todoList}/>
    </div>
  )
}
/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css"
import { useReducer } from "react"
import reducer from "./REDUCER.JSX"

// hard code the values for preventing typos:
const ACTIONTYPES = {
  INCREAMENT : "increament",
  DECREAMENT : "decreament"
}


export default function App(){
  // dispatch calls the reducer fucntion
  // reducer function is in a different file
  const [state,dispatch] = useReducer(reducer,{count:0, total : 0})

  function increament(){
    // what we pass to dispatch is the action
    dispatch({type:ACTIONTYPES.INCREAMENT});
  }
  function decreament(){ 
    dispatch({type:ACTIONTYPES.DECREAMENT})
  }

  return(
    <div className="d-flex">
      <h1>Total {state.total} </h1>
      <button onClick={increament} className="p-3 m-3">+</button>
      <h1 className="m-3">{state.count}</h1>
      <button onClick={decreament} className="p-3 m-3">-</button>
    </div>
  )
}
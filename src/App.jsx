import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/display"
import Buttons from "./components/button"
import "./index.css"
import { useState } from "react"

export default function App(){

  const [inpVal,setInpVal] = useState("");

  function handleClick(operation){
    if(operation=="C"){setInpVal("");}
    else if(operation=="="){
      let output;
      try{
        output = eval(inpVal);
      }
      catch(e){
        output = "Invalid Expression!"
      }
      setInpVal(output);
    }
    else{
      const newVal = inpVal+ operation;
      setInpVal(newVal)
    }
  }

  return(
    <div className="calcBody">
      <Display val={inpVal}/>
      <Buttons handleClick={handleClick}/>
    </div>
  )
}
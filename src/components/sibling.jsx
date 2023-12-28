import { useState } from "react"

export default function Siblingstate(){
    const [count,setCount] = useState(0);

    // this shows the problem with using state at sibling level

    function handleClick(){
        setCount(count+1);
    }
    
    return(
        <>
            <button onClick={handleClick}>
                you clicked {count} times.
            </button>
            <button onClick={handleClick}>
                you clicked {count} times.
            </button>
        </>
    )
}
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./child";

export default function Card({increseTotalLike}){
    const [clicks,setClicks] = useState(0);

    function handleClick(){
        setClicks(clicks+1);
        increseTotalLike();
    }
    

    return(
        <div>
            <h1>This is a card </h1>
            <Button handleClick={handleClick} clicks={clicks}/>
        </div>
    )
}
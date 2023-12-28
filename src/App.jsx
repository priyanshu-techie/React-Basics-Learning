import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/parent"
import { useState } from "react"


export default function App(){
  const [totalClicks,setTotalClicks] = useState(0);

  // i want to maintain a total like while maintaining the individual state of the cards ,
  // hence sending the function to increase the total like as a callback to the card
  // where it will call it in the handle click funcion 


  // i can't maintain the individual state of the individual cards in this file , if maintained here ,
  // then a click will result in change of the click val everywhere

  function increseTotalLike(){
    setTotalClicks(totalClicks+1);
  }

  return(
    <>
    <h1>totalNumber of clicks is {totalClicks}</h1>
      <Card increseTotalLike={increseTotalLike}/>
      <Card increseTotalLike={increseTotalLike}/>
      <Card increseTotalLike={increseTotalLike}/>
    </>
  )
}
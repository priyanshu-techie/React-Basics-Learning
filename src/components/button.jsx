/* eslint-disable react/prop-types */
function Buttons({handleClick}){
    const buttonsArr = ["C","+","-","*","/","0","1","2","3","4","5","6","7","8","9"," ",".","="]
    return <div className="buttons">
        {buttonsArr.map((elem,ind)=>(
            <div className="button" key={ind} onClick={()=>handleClick(elem)}>
                {elem}
            </div>
        ))}
    </div>
}

export default Buttons;
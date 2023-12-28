/* eslint-disable react/prop-types */
export default function Button({handleClick , clicks}){
    return <button onClick={handleClick}>
                You clicked: {clicks} times. 
        </button>
}
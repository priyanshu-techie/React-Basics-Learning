/* eslint-disable react/prop-types */

import "./container.css"
function Container(props){
    return(
        <div className="contain">
            {props.children}
        </div>
    )
}

export default Container;
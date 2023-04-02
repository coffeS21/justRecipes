import React from "react"
import "../../styleFolder/globalComponentsStyles/globalComponents.css"
export default function Button(props){
    return(
        <div id="buttonContainer">
            <button>{props.buttonText}</button>
        </div>
    )
}
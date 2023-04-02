import React from "react"
import "../../styleFolder/globalComponentsStyles/globalComponents.css"
export default function Footer(props){
    return(
        <div id="footerContainer">
            <h1>{props.footer}</h1>
        </div>
    )
}
import React from "react"
import "../../styleFolder/globalComponentsStyles/globalComponents.css"
export default function TripleHeader(props){
    return(
        <div id="headerContainer">
        <h1 className="header">{props.header1}</h1>
        </div>
    )
}
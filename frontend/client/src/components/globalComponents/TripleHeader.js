import React from "react"
import "../../styles/componentStyles/componentStyles.css"
export default function TripleHeader(props){
    return(
        <div id="tripleHeaderContainer">
        <div id="header1">
        <h1>{props.header1}</h1>
        </div> 
        <div id="header2">
        <h1>{props.header2}</h1>
        </div> 
        <div id="header3">
        <h1>{props.header3}</h1>
        </div> 
        </div>
    )
}
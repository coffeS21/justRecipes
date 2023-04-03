import React from "react"

export default function TripleHeader(props){
    return(
        <div id="tripleHeaderContainer">
        <h1 className="header">{props.header1}</h1>
        <h1 className="header">{props.header2}</h1>
        <h1 className="header">{props.header3}</h1> 
        </div>
    )
}
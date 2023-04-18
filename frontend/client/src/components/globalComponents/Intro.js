import React from "react"
import 'animate.css';
export default function Intro(props){
    return(
        <div id="introContainer">
        <h1 >{props.intro}</h1>
        </div>
    )
}
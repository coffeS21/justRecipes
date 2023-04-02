import React from "react"
import {Link} from "react-router-dom"
import Button from "./Button"

export default function AuthNav(props){
    return(
    
        <div id="linkContainer">
            <Button buttonText="singup"/>
        {/* <Link className="navLikinks" to="/profilePage">
        <Button/>
        </Link>
        <Link className="navLikinks" to="/allRecipesPage">
        <Button/>
        </Link>
        <Link className="navLikinks" to="/myRecipesPage">
        <Button/>
        </Link>
        <Link className="navLikinks" to="/createRecipePage">
        <Button/>
        </Link>
        <Link className="navLikinks" to="/notePage"> 
        <Button/>
        </Link> */}
        </div> 
    )
}

import React from "react"
import {Link} from "react-router-dom"
import "../../styles/componentStyles/componentStyles.css"


export default function AuthNav(props){
    return(
            <div id="linkContainer">
                <Link className="navLinks" to="/profilePage">
                    profile
                </Link>

                <Link className="navLinks" to="/allRecipesPage">
                        all recipes
                </Link>

                <Link className="navLinks" to="/MyRecipesPage">
                        my recipes
                </Link>

                <Link className="navLinks" to="/createRecipePage">
                        create recipe
                </Link>
            </div>
    )
}
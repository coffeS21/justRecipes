import React from "react"
import {Link} from "react-router-dom"



export default function AuthNav(props){
    return(
        <div>
            <div id="linkContainer">
                <Link className="navLikinks" to="/profilePage">
                    <button>settings</button>
                </Link>
                <Link className="navLikinks" to="/allRecipesPage">
                    <button>all recipes page</button>
                </Link>
                <Link className="navLikinks" to="/myRecipesPage">
                    <button>my recipes page</button>
                </Link>
                <Link className="navLikinks" to="/createRecipePage">
                    <button>create recipe</button>
                </Link>
                <Link className="navLikinks" to="/notePage">
                    <button>my notes</button>
                </Link>
            </div>
        </div>
    )
}
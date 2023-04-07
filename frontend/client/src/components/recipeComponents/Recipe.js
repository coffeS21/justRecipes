import React from "react"
import "../../styles/componentStyles/componentStyles.css"
// import RecipeForm from "./RecipeForm"

export default function Recipe(props){
    const {title,
        deleteMe,
        currentUser, 
        user, 
         _id, 
        editRecipe} = props
        console.log(currentUser)
    return(
        <div>
            {user === currentUser._id ?
                <div id="recipeContainer">
                    <div id="titleContainer">
                    <h1>{title}</h1>
                    </div>
                    <div id="chai">
                    <h2 onClick={()=> deleteMe(_id) }>delete</h2> 
                    </div>
                </div>
                :
                <div id="recipeContainer">
                    <div><h1>{title}</h1></div>
                </div>
            }    
        </div> 
    )
}
                    {/* <RecipeForm 
                    buttonLable="edit recipe"
                     id={_id} 
                     submit={editRecipe}
                     title={title} 
                     /> */}
                    {/* <button onClick={()=> deleteMe(_id) }>delete recipe</button> */}
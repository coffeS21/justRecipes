import React from "react"
import RecipeForm from "./RecipeForm"

export default function Recipe(props){
    const {title,
        ingredents,
        recipeSteps,
        deleteMe,
        currentUser, 
        user, 
         _id, 
        editRecipe} = props
    return(
        <div>
            {user === currentUser._id ?
                <div>
                    <h1>{title}</h1>
                    <p>{ingredents}</p>
                    <p>{recipeSteps}</p>
                    <button onClick={()=> deleteMe(_id) }>delete recipe</button>
                    <RecipeForm 
                    buttonLable="edit recipe"
                     id={_id} 
                     submit={editRecipe}
                     title={title} 
                     />
                </div>
                :
                <>
                    <h1>{title}</h1>
                    <p>{ingredents}</p>
                    <p>{recipeSteps}</p>
                </>
            }    
        </div> 
    )
}
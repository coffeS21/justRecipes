import React from "react"
import Recipe from "../../components/recipeComponents/Recipe"

export default function AllRecipesPage(props){
    const {all, currentUser} = props
 
    const mappedAllRecipes = all.map(recipe => <Recipe{... recipe} currentUser={currentUser} key={recipe._id}/>)
    return(
        <div>
            <div>{mappedAllRecipes}</div>
        </div>
    )
}
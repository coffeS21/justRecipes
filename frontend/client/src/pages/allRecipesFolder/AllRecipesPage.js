import React from "react"
// import Recipe from "../../components/recipeComponents/Recipe"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Footer from "../../components/globalComponents/Footer"
import "../../styles/pageStyles/pageStyles.css"
export default function AllRecipesPage(props){
    // const {all, currentUser} = props
 
    // const mappedAllRecipes = all.map(recipe => <Recipe{... recipe} currentUser={currentUser} key={recipe._id}/>)
    return(
        <div className="pageContainer">
            <div className="tripleHeaderContainer">
            <TripleHeader 
            header1="just" 
            header2="real" 
            header3="recipes"
            />
            </div>
            {/* <div>{mappedAllRecipes}</div> */}
            <div className="footerContainer">
            <Footer footer="just recipes"/>
        </div>
        </div>
    )
}
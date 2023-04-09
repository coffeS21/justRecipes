import React from "react"
 import Recipe from "../../components/recipeComponents/Recipe"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
import Nav from "../../components/globalComponents/Nav"
import "../../styles/pageStyles/pageStyles.css"
import "../../styles/pageStyles/allRecipesPage.css"
export default function AllRecipesPage(props){
    const {all, currentUser} = props
 
    const mappedAllRecipes = all.map(recipe => <Recipe{... recipe} currentUser={currentUser} key={recipe._id}/>)
     return(
        <div className="pageContainer">

        <div className="tripleHeaderContainer">
            <TripleHeader 
            header1="just" 
            header2="real" 
            header3="recipes"
        />
        </div>

        <div className="pageLable">
        <div id="headerContainer">
            <Header header="recipes page"/>
        </div>
        <div id="navContainer">
            <Nav/>
        </div>
        </div>
        <div id="allRecipeContainer">
            <p>{mappedAllRecipes}</p>
        </div> 
        <div className="footerContainer">
            <Footer footer="just recipes"/>
        </div>
        </div>
    )
}
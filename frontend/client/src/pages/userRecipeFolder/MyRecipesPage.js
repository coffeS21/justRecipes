import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
import Nav from "../../components/globalComponents/Nav"
import Recipe from "../../components/recipeComponents/Recipe"
import "../../styles/pageStyles/pageStyles.css"
import "../../styles/pageStyles/myRecipesStyles.css"

export default function MyReicesPage(props){
    const {recipes,chef,deleteFood,add,edit} = props
    const mappedRecipe = recipes.map(recipe => <Recipe 
                                            {... recipe} 
                                            key={recipe._id}
                                            deleteMe={deleteFood}
                                            currentUser={chef}
                                            submit={add}
                                            editRecipe={edit}
                                            />)
                                            console.log(mappedRecipe.length)

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
        <Header header="my recipes page"/>
    </div>
    <div id="navContainer">
        <Nav/>
    </div>
    </div>
    <div id="myRecipeContainer">
        {mappedRecipe.length <=0? <h2>you currently have zero recipes</h2>: mappedRecipe }
    </div>
    <div className="footerContainer">
        <Footer footer="just recipes"/>
    </div>
    </div> 
    )
}

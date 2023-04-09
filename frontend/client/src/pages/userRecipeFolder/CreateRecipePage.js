import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Footer from "../../components/globalComponents/Footer"
import Header from "../../components/globalComponents/Header"
import Nav from "../../components/globalComponents/Nav"
import "../../styles/pageStyles/pageStyles.css"
import "../../styles/pageStyles/createPageStyles.css"
import RecipeForm from "../../components/recipeComponents/RecipeForm"



export default function CreateRecipePage(props){
    const {submit} = props
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
          <Header header="create page"/>
        </div>

        <div id="navContainer">
            <Nav/>
        </div>

        </div>
         
         <div id="createContainer">
         <RecipeForm 
            buttonLable="create recipe" 
            submit={submit} />
        </div>

        <div className="footerContainer">
            <Footer footer="just recipes"/>
        </div>

        </div>
      )
}
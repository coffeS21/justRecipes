import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
import "../../styleFolder/globalComponentsStyles/globalComponents.css"

export default function AllRecipePage(props){
    const {all, currentUser} = props
 
    const mappedAllRecipes = all.map(recipe => <Recipe{... recipe} currentUser={currentUser} key={recipe._id}/>)
    return(
        <div className="pageContainer">
        <div id="tripleHeaderContainer">
            <TripleHeader 
            header1="just" 
            header2="real" 
            header3="recipes"
            />
        </div>
        <div id="pageContainer">
            <Header header="profile page"/>
        </div>
        <div>
            {mappedAllRecipes}
        </div>
        <div id="footerContainer">
            <Footer footer="just recipes"/>
        </div>
        </div>
    )
}
import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
import "../../styleFolder/globalComponentsStyles/globalComponents.css"

export default function UserRecipePage(props){
    const {recipes,chef,deleteFood,add,edit} = props
    const mappedRecipe = recipes.map(recipe => <Recipe 
                                            {... recipe} 
                                            key={recipe._id}
                                            deleteMe={deleteFood}
                                            currentUser={chef}
                                            submit={add}
                                            editRecipe={edit}
                                            />)

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
{/* <h1>{mappedRecipe}</h1> */}
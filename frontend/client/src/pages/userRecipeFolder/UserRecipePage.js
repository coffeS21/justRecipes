import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
// import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
// import Recipe from "../../components/recipeComponents/Recipe"
import "../../styles/pageStyles/pageStyles.css"

export default function UserRecipePage(props){
    // const {recipes,chef,deleteFood,add,edit} = props
    // const mappedRecipe = recipes.map(recipe => <Recipe 
    //                                         {... recipe} 
    //                                         key={recipe._id}
    //                                         deleteMe={deleteFood}
    //                                         currentUser={chef}
    //                                         submit={add}
    //                                         editRecipe={edit}
    //                                         />)

    return(
    <div className="pageContainer">
    <div className="tripleHeaderContainer">
        <TripleHeader 
        header1="just" 
        header2="real" 
        header3="recipes"
        />
    </div>
    {/* <div id="pageContainer">
        <Header header="profile page"/>
    </div> */}
    <div>
        {/* {mappedRecipe} */}
    </div>
    <div className="footerContainer">
        <Footer footer="just recipes"/>
    </div>
    </div> 
    )
}

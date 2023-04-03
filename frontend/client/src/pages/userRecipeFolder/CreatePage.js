import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Footer from "../../components/globalComponents/Footer"
import Header from "../../components/globalComponents/Header"




export default function CreateRecipePage(props){
    const {submit} = props
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
        {/* <div>
            <RecipeForm 
            buttonLable="this is a test" 
            submit={submit} />
        </div> */}
        <div id="footerContainer">
            <Footer footer="just recipes"/>
        </div>    
        </div>
      )
}
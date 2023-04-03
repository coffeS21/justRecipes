import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"

export default function ProfilePage(props){
    const {deleteAccount, username, id, logout} = props
      function deleteProfile(){
        deleteAccount(id)
      }
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
          
          
          
          <div id="userInfoContainer">
            
            <div id="accountContainer">
            <p onClick={logout}>logout</p>
            <p onClick={deleteProfile}>delete account</p>
            </div>

            <div id="greetingContainer">
            <h3>welcome chef</h3>
            <h2>chai</h2>
            </div>
            
          </div>






          <div id="footerContainer">
            <Footer footer="just recipes"/>
        </div>

        </div>
    )
}
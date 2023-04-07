import React from "react"
import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
import Nav from "../../components/globalComponents/Nav"
import "../../styles/pageStyles/pageStyles.css"
import "../../styles/pageStyles/authPageStyles/profilePage.css"
export default function ProfilePage(props){
    const {deleteAccount, username, id, logout} = props
      function deleteProfile(){
        deleteAccount(id)
      }
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
          <Header header="profile page"/>
          </div>
          <div id="navContainer">
            <Nav/>
          </div>
          </div> 
          
          
          
         <div id="userInfoContainer">
            <div id="greetingContainer">
            <h3>welcome chef</h3>
            <h2>{username}</h2>
            </div>
        </div>
            
        <div id="accountContainer">
          <p onClick={logout}>logout</p>
          <p onClick={deleteProfile}>delete account</p>
        </div>


        <div className="footerContainer">
          <Footer footer="just recipes"/>
        </div>
      </div>
    )
}
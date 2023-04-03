import React, {useState, useContext} from "react"

import TripleHeader from "../../components/globalComponents/TripleHeader"
import Header from "../../components/globalComponents/Header"
import Footer from "../../components/globalComponents/Footer"
import AuthForm from "../../components/authComponents/AuthForm"
import {UserContext} from "../../context/UserProvider"

const credentials = {
    username: "",
    password: ""
}

export default function LandingPage(props){
    const [authInputs, setAuthInputs] = useState(credentials)
    const [formToggle, setFormToggle] = useState(false)
    const {signup, login, errMsg, restAuthErr} = useContext(UserContext)

    function handleChange (e){
        const {name, value} = e.target
        setAuthInputs(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    function handleSignup(e){
        e.preventDefault()
        signup(authInputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(authInputs)
    }

    function authFormToggle(){
        setFormToggle(prev => !prev)
        restAuthErr()
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
        <div id="authFormContainer">
            {!formToggle ?
            <>
            <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            authInputs={authInputs}
            errMsg={errMsg}
            />
            </>
            :
            <>
            <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            authInputs={authInputs}
            errMsg={errMsg}
            /> 
            </>
            }
            </div>
        <div id="footerContainer">
            <Footer footer="just recipes"/>
        </div>
        </div>
    )
}
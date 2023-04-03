import React from "react"

export default function AuthForm(props){
    
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        authInputs: {
        username,
        password
        }
    } = props

    return(
        <div>
        <form 
        id="landingPageFormContainer"   
        onSubmit={handleSubmit}>
        <label>
        <h6>username</h6>
        </label>
        <input
        className="chalk-border"
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        autocomplete="off"
        />
        <label>
        <h6>password</h6>
        </label>
        <input
        className="chalk-border"
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        autocomplete="off"
        />  
        <div id="authFormButtonContainer">
        <button>{btnText}</button>
        </div>
        <div id="errContainer">
        <p >{errMsg}</p>
        </div>
        </form> 
    </div>
    )
}
import React, {useState} from "react"
import "../../styles/componentStyles/authForm.css"
export default function RecipeForm(props){

    const recipeData = {
             title: props.title || "",
             ingredents: props.ingredents || "", 
             steps: props.steps || ""
         }
    const [inputs, setInputs] = useState(recipeData)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevState => ({
            ...prevState, 
            [name]: value}
        ))
    }
    
    
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs , props.id)
        setInputs(inputs)


    }
    return(
        <div id="createFormContainer">
        <form onSubmit={handleSubmit}>
        <div>
            <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="title"/>
        </div>
        <div>
            <textarea
            type="text"
            name="ingredents"
            value={inputs.ingredents}
            onChange={handleChange}
            placeholder="enter your ingredents list"/>
        </div>
        <div>
            <textarea
            type="text"
            name="steps"
            value={inputs.steps}
            onChange={handleChange}
            placeholder="enter your recipe steps"
            />
        </div>
        <div>
            <button>{props.buttonLable}</button>
        </div>
        </form>
        </div>
    )
}
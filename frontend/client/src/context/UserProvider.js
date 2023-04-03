import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const newUser = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        myRecipes:  [],
        allRecipes: [],
        errMsg:  ""    
    }
    const [initChefState, setInitChefState] = useState(newUser)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setInitChefState(prevState => ({
                ...prevState,
                user,
                token   
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getMyRecipes()
            getAllRecipes()
            setInitChefState(prevState => ({
                ...prevState,
                user,
                token
                
            }))
        })
        
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setInitChefState({
            user: {},
            token: "",
            myRecipes: [],
            allRecipes:[],
            notes:[]
        })
    }
    function handleAuthErr(errMsg){
        setInitChefState(prevState => ({
            ...prevState,
            errMsg
        }))
    }
    function restAuthErr(){
        setInitChefState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }
    function deleteAccount(userId){
        userAxios.delete(`/api/user/${userId}`)
        .then(res => console.log(res))
        localStorage.removeItem("user")
        setInitChefState({
            user: {},
            token: "",
            recipes: [],
            notes: []
        })
        .catch(err => console.log(err))
    }
    
/********************recipe section *********************/
    //my recipes
    function getMyRecipes(){
        userAxios.get("/api/recipe/user")
        .then(res => {
            setInitChefState(prevState => ({
                ...prevState,
                myRecipes: res.data
            }
            ))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    //all recipes
    function getAllRecipes(){
        userAxios.get("/api/recipe")
        .then(res => {
            setInitChefState(prevState => ({
                ...prevState,
                allRecipes: res.data
                
            }))       
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    //create recipe
    function addRecipe(newRecipe){
        userAxios.post("/api/recipe", newRecipe)
        .then(res => {
            setInitChefState(prevState => ({
                ...prevState,
                myRecipes: [...prevState.myRecipes, res.data],
                allRecipes: [...prevState.allRecipes, res.data]
                
            }))
            console.log("recipe added")
        })
        .catch(err => console.log(err.response.data.errMsg))  
    }
    //edit recipe
    function editRecipe(edits, recipeId){
        userAxios.put(`/api/recipe/${recipeId}`, edits)
        .then(res => {
            getMyRecipes()
        })
        
        .catch(err => console.log(err.response.data.errMsg)) 
    }
    
    function deleteRecipe(recipeId){
        userAxios.delete(`/api/recipe/${recipeId}`)
        .then(res => {
            console.log("this is the delete function")
             newUser.myRecipes.filter(recipe => recipe._id !== recipeId)
             newUser.allRecipes.filter(recipe => recipe._id !== recipeId)
            getMyRecipes()
            getAllRecipes()
        })
        .catch(err => console.log(err))
    }

    return(
        <UserContext.Provider
            value ={{
                ...initChefState,
                signup,
                login,
                logout,
                restAuthErr,
                deleteAccount,
                addRecipe,
                deleteRecipe,
                editRecipe,
            }}>
            {props.children}
        </UserContext.Provider>
    )
}
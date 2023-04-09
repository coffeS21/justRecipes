import React, {useContext} from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import {UserContext} from "./context/UserProvider"
// import Nav from "./components/globalComponents/Nav"
import ProfilePage from "./pages/authPages/ProfilePage"
import LandingPage from "./pages/authPages/LandingPage"
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute"
import AllRecipesPage from "./pages/allRecipesFolder/AllRecipesPage"
import MyRecipesPage from "./pages/userRecipeFolder/MyRecipesPage"
import CreateRecipePage from "./pages/userRecipeFolder/CreateRecipePage"
import "./styles/pageStyles/pageStyles.css"

export default function App(props){
    const {token,
          user,
          deleteRecipe,
          addRecipe,
          logout,
          editRecipe,
          deleteAccount,
          ...initChefState
        } = useContext(UserContext)
    return(
        <div>
         {/* { token  } */}
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/profilePage"/> : <LandingPage />}
        />
         <Route 
          path="/profilePage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <ProfilePage 
              deleteAccount={deleteAccount} 
              username={user.username} 
              id={user._id}
              logout={logout}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/allRecipesPage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <AllRecipesPage all={initChefState.allRecipes} currentUser={user}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/myRecipesPage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <MyRecipesPage 
              recipes={initChefState.myRecipes}
              chef={user}
              deleteFood={deleteRecipe}
              add={addRecipe}
              edit={editRecipe}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/createRecipePage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <CreateRecipePage submit={addRecipe}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
    )
}
import React, {useContext} from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import {UserContext} from "./contextFolder/UserProvider"
import Nav from "./components/globalComponents/Nav"
import LandingPage from "./pages/authPages/LandingPage"
import ProfilePage from "./pages/authPages/ProfilePage"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"
import AllRecipesPage from "./pages/recipePages/AllRecipesPage"
import CreateRecipePage from "./pages/recipePages/CreateRecipePage"
import UserRecipesPage from "./pages/recipePages/UserRecipesPage"


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
        <div className="app">
        { token && <Nav/> }
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
          path="/userRecipesPage" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <UserRecipesPage 
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


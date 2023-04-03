import React, {useContext} from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import {UserContext} from "./context/UserProvider"
import Nav from "./components/appFolder/Nav"
import ProfilePage from "./pages/authFolder/ProfilePage"
import LandingPage from "./pages/authFolder/LandingPage"
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute"
import AllRecipesPage from "./pages/allRecipes/AllRecipesPage"
import MyRecipesPage from "./pages/myRecipeFolder/MyRecipesPage"
import CreateRecipePage from "./pages/myRecipeFolder/CreateRecipePage"


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
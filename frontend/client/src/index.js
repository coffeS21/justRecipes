import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserProvider"
import ProfilePage from "./pages/authPages/ProfilePage"
// import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <BrowserRouter>
      <UserProvider>
        <ProfilePage />
      </UserProvider>
      </BrowserRouter>
    </div>
     
)


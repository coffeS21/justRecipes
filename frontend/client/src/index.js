import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserProvider"
import LandingPage from "./pages/authPages/LandingPage"
// import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <BrowserRouter>
      <UserProvider>
        <LandingPage />
      </UserProvider>
      </BrowserRouter>
    </div>
     
)


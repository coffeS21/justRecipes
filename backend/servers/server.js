const express = require("express")
const server = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require('express-jwt')
//dot env vars
process.env.SECRET
process.env.DATABASE
//middlewear
server.use(express.json())
server.use(morgan("dev"))
//routes
server.use("/auth", require("../routes/authRouter"))
server.use("/api", expressjwt({secret: process.env.SECRET,algorithms: ['HS256']}))
server.use("/api/recipe", require("../routes/recipeRouter"))
server.use("/api/user", require("../routes/userRouter"))
//error handler
server.use((err, req, res, next)=> {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
//servers
mongoose.connect(process.env.DATABASE)
mongoose.connection.on("connected", ()=>{
    console.log("atlas  connected")
})
server.listen(8000, ()=>{
    console.log("server on")
})
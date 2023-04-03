const express = require("express")
const userRouter = express.Router()
const User = require("../models/user.js")


//get all users
userRouter.get("/", (req, res, next)=>{
    User.find((err, users)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//delete account
userRouter.delete("/:userId", (req, res, next)=>{    
    User.findOneAndDelete({_id: req.params.userId, user: req.auth._id}, (err, deletedUser)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedUser.username} your account has been removed.`)
    })
})

module.exports = userRouter
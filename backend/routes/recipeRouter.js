const express = require("express")
const recipeRouter = express.Router()
const Recipe = require("../models/recipe.js")

//get all recipes
recipeRouter.get("/", (req, res, next)=>{
    Recipe.find((err, recipes)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(recipes)
    }).populate({path: "user", select:["username"]})
})
//get by id
recipeRouter.get("/user", (req, res, next)=>{    
    Recipe.find({user: req.auth._id}, (err, myRecipes)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(myRecipes)
    })
})

//create new recipe
recipeRouter.post("/", (req,res,next)=>{
    req.body.user = req.auth._id
    const newRecipe = new Recipe(req.body)
    newRecipe.save((err, savedRecipe)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedRecipe)
    })
})

//delete recipe
recipeRouter.delete("/:recipeId", (req, res, next)=>{    
    Recipe.findOneAndDelete({_id: req.params.recipeId, user: req.auth._id}, (err, deletedRecipe)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedRecipe.title} has been deleted `)
    })
})

//update recipe
recipeRouter.put("/:recipeId", (req,res,next) => {
    Recipe.findOneAndUpdate({_id: req.params.recipeId, user: req.auth._id}, 
        req.body,
        {new: true},
        (err, updatedRecipe) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedRecipe)
        })
})


module.exports = recipeRouter
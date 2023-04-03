const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    joinDate: {
    type: Date,
    default: Date.now
     },
     title: {
    type: String
     },
     ingredents: {
    type: String
     },
     recipeSteps: {
    type: String
     },
     user: {
    type: Schema.Types.ObjectId,
    ref: "User"
     }
})

module.exports = mongoose.model("recipe", recipeSchema)
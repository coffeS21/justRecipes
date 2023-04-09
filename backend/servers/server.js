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
/***
 * [
  {
    "_id": "63b493180187b8306010bffa",
    "title": "recipe12345678912",
    "user": null,
    "joinDate": "2023-01-03T20:42:00.409Z",
    "__v": 0
  },
  {
    "_id": "63b4931b0187b8306010bffc",
    "title": "recipe123456789123",
    "user": null,
    "joinDate": "2023-01-03T20:42:03.156Z",
    "__v": 0
  },
  {
    "_id": "63b493200187b8306010c000",
    "title": "recipe12345678912345",
    "user": null,
    "joinDate": "2023-01-03T20:42:08.973Z",
    "__v": 0
  },
  {
    "_id": "63b493260187b8306010c002",
    "title": "recipe123456789123456",
    "user": null,
    "joinDate": "2023-01-03T20:42:14.408Z",
    "__v": 0
  },
  {
    "_id": "63b4932a0187b8306010c004",
    "title": "recipe1234567891234567",
    "user": null,
    "joinDate": "2023-01-03T20:42:18.364Z",
    "__v": 0
  },
  {
    "_id": "63b4932f0187b8306010c006",
    "title": "recipe12345678912345678",
    "user": null,
    "joinDate": "2023-01-03T20:42:23.037Z",
    "__v": 0
  },
  {
    "_id": "63b493330187b8306010c008",
    "title": "recipe123456789123456789",
    "user": null,
    "joinDate": "2023-01-03T20:42:27.062Z",
    "__v": 0
  },
  {
    "_id": "63b790f36da298d1475be1cf",
    "title": "goodm",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-06T03:09:39.654Z",
    "__v": 0
  },
  {
    "_id": "63b795e36da298d1475be1f4",
    "title": "dddddd",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-06T03:30:43.211Z",
    "__v": 0
  },
  {
    "_id": "63b79a026da298d1475be1fb",
    "title": "r2",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-06T03:48:18.730Z",
    "__v": 0
  },
  {
    "_id": "63b79a0f6da298d1475be1fd",
    "title": "r400",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-06T03:48:31.711Z",
    "__v": 0
  },
  {
    "_id": "63bb772bc819de7a1e869ab9",
    "title": "this was made with props",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-09T02:08:43.619Z",
    "__v": 0
  },
  {
    "_id": "63bb8744c61b6274a1d12789",
    "title": "love",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-09T03:17:24.166Z",
    "__v": 0
  },
  {
    "_id": "63bb8755c61b6274a1d1278b",
    "title": "love",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-09T03:17:41.321Z",
    "__v": 0
  },
  {
    "_id": "63bce16d11b863beae3d8294",
    "title": "cc",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-10T03:54:21.538Z",
    "__v": 0
  },
  {
    "_id": "63bce19e11b863beae3d8296",
    "title": "c",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-10T03:55:10.538Z",
    "__v": 0
  },
  {
    "_id": "63bce1c811b863beae3d8298",
    "title": "c",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-10T03:55:52.694Z",
    "__v": 0
  },
  {
    "_id": "63bce21211b863beae3d82a3",
    "title": "jelly",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-10T03:57:06.216Z",
    "__v": 0
  },
  {
    "_id": "63bd19d5cf442d993cb72d00",
    "title": "nnnnn",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-10T07:55:01.796Z",
    "__v": 0
  },
  {
    "_id": "63c0395b4e4e576101efef20",
    "title": "csa",
    "ingredents": "",
    "user": null,
    "joinDate": "2023-01-12T16:46:19.185Z",
    "__v": 0
  }
]
 * *** */
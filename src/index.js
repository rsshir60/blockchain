const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const route = require ("./route")

const app = express()

app.use (bodyParser.json())

app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect ("mongodb+srv://ranjeet-DB:ITb4ln5lLexVuOAv@cluster0.wcldjs5.mongodb.net/blockchain?retryWrites=true&w=majority",{useNewUrlParser:true})
.then (()=> console.log(("Mongoose is connected"))).catch (err=> console.log(err.message))

app.use ("/",route)

app.listen(process.env.PORT||3000, function(){console.log("express is running on port "+ (process.env.PORT||3000))})
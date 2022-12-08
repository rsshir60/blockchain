const express=require("express")
const router=express.Router()
const Cyrpto = require("./Cypto_Controller")




router.get("/Top100coins",Cyrpto)





router.all("/*",function(req,res){
    res.status(404).send({msg:"invalid http request"})
})



module.exports = router
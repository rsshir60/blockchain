const axios = require("axios");
const coin_Model = require("./coin_Model");

const Top100coins = async function (req,res){
 
try {

    let options = {
        method: "get",
        url: 'https://api.coincap.io/v2/assets',
        headers : { Authorization : "Bearer f1a30e3a-d227-42bf-8980-9d088d2ccf8f"}
    }
    let result = await axios(options);
    let data = result.data.data
    let sorted = data.sort((a,b)=> a.changePercent24Hr-b.changePercent24Hr)

    sorted.forEach((element) => { delete element.explorer});

    await coin_Model.insertMany(sorted)

    // for (i in data){
    //     await coin_Model.create(data[i])
    //     break;
    // }

    res.status(201).send({msg: "success" , data:sorted})

} catch (error) {
    if(error.code ==11000){return res.status(400).send({msg:"duplicate key is not allowed"})}
    res.status(500).send({status:false,msg:error.message})
}

}

module.exports =Top100coins
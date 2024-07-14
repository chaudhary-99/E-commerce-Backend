const bcrypt= require('bcrypt');
const User=require("../models/product-model.js");
const jwt=require("jsonwebtoken")
require("dotenv").config()
exports.signup=async(req,res)=> {
    try{
       
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            sucess:false,
            message:'User cannot be registered, please try agin later',
        })
        

    }
}


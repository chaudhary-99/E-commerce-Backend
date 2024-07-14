const express=require("express");
const router=express.Router();


const {admin, users, products}=require("../controllers/productController");

//api routes

router.post("/admin",admin);
// router.post("/users",users);
// router.post("/products",products);
module.exports=router;

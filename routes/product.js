const express=require("express");
const router=express.Router();


const {adminRouter, usersRouter, productsRouter}=require("../controllers/productController");

//api routes

router.post("/admin",adminRouter);
router.post("/users",usersRouter);
router.post("/products",productsRouter);
module.exports=router;
const mongoose=require("moongoose");
require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("DB connected successfully")})
    .catch((err)=>{
        console.log("DB CONNECTION ISSUES");
        console.error(err);
        process.exit(1);
    });
}
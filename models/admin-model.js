const mongoose=require("moongoose");

const ownerSchema= new mongoose.Schema({
      fullName:{
        type:String,
        minLength:3,
        trim:true,
        require:true,
      },
      email:{
        type:String,
        require:true,
      },
      password:{
        type:String,
        required:true,
      },
      products:{
        type:Array,
        default:[],
      },
      picture:{
        type:String,
        required:true,
      },
      gstin:{
        type:String,
        default:[],
      }
});

module.exports=mongoose.model("owner",ownerSchema);
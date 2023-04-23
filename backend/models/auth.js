import mongoose  from "mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{timestamps:true});

export default mongoose.model('Auth',authSchema,'auth')

const { Schema, model }= require("mongoose");
const findOrCreate = require("mongoose-findorcreate");


const userSchema = new Schema({
    firsName:{type:String,require:true,lowercase:true},
    LastName:{type:String,require:true,lowercase:true},
    email:{type:String, require:true},
    password:{type:String,require:true},
    profilePhoto:{type:Array,default:[]},
    activity:[{type:Schema.Types.ObjectId, ref:"Activity"}]

},{
    timestamps:false,
    versionKey:false //para que no aprezca el __v
});
userSchema.plugin(findOrCreate);
module.exports = model("User", userSchema)
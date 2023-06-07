const mongoose= require("mongoose") ;
require('dotenv').config();
const { URL_MONGO } = process.env;

(async()=>{
   
    try {
    const db = await mongoose.connect(URL_MONGO)
    console.log("DB connected to", db.connect.name) 
    } catch (error) {
        console.log(error)
    }
   
})()

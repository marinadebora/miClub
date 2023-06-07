const Event = require("../../models/Event");

const postEvent = async(req,res)=>{
    const {nam,image,description,date}= req.body
    try {
        let event = await Event.create({nam,image,description,date});
        res.json(event)
    } catch (error) {
        console.log(error)
    }
  

    
    }

    module.exports = {postEvent}